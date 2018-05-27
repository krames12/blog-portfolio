import React from 'react';
import Helmet from 'react-helmet'

export default function Template({data}) {
    const {markdownRemark: post} = data;

    return (
        <div key={post.id}>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html:post.html}} />
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`