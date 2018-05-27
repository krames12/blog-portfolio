import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => (
  <div>
    <h1>Ramblings And Thoughts</h1>
  </div>
)

export const listQuery = graphql`
    query BlogListQuery {
        allMarkdownRemark {
            edge {
                node {
                    html
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
