import React from 'react'
import Link from 'gatsby-link'

const BlogList = ({data}) => (
  <div>
    <h1>Ramblings And Thoughts</h1>

    <ul>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <li>
                <Link
                    key={node.id}
                    to={node.frontmatter.path}>
                    {node.frontmatter.title}
                </Link>
            </li>
        ) )}
    </ul>
  </div>
)


export const listQuery = graphql`
    query BlogListQuery {
        allMarkdownRemark(limit: 10) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                }
              }
            }
          }
    }
`


export default BlogList;