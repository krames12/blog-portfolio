import React from 'react'
import Link from 'gatsby-link'

const BlogList = ({data}) => (
  <div>
    <h2>Ramblings And Thoughts</h2>

    <ul id="blog-post-list">
        {data.allMarkdownRemark.edges.map( ({node}) => (
            <li className="blog-post-card">
                <Link
                    key={node.id}
                    to={node.frontmatter.path}
                    className="blog-post-title">
                    {node.frontmatter.title}
                </Link>
                <div className="blog-post-card-contents">
                    <p className="blog-post-date">{node.frontmatter.date}</p>
                    <p className="blog-post-excerpt">{node.excerpt}</p>
                </div>
            </li>
        ) )}
    </ul>
  </div>
)


export const listQuery = graphql`
    query BlogListQuery {
        allMarkdownRemark(
            limit: 10
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
              node {
                id
                excerpt(pruneLength: 300)
                frontmatter {
                date(formatString: "MMMM DD, YYYY")
                  path
                  title
                }
              }
            }
          }
    }
`


export default BlogList;