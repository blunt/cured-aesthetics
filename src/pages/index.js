import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const rows = chunk(posts, 5);

    return (
      <div className="home mt3">
        <Helmet title={siteTitle} />
        {
          rows.map((posts, i) => (
          <section className="grid" key={`post-${i}`}>
            {
              posts.map((item) => {
                const title = get(item, 'node.frontmatter.title') || item.node.fields.slug
                const by = get(item, 'node.frontmatter.by') || item.node.fields.slug
                const price = get(item, 'node.frontmatter.price') || item.node.fields.slug
                const theme = get(item, 'node.frontmatter.theme') || item.node.fields.slug


                return (
                  <div
                    className="item bg-white ba"
                    key={item.node.fields.slug}
                  >
                    <Link 
                      to={item.node.fields.slug}
                      className="bn link dark-gray relative db flex items-center h-100 pa5-l pa4"
                    >
                      <Img 
                        sizes={item.node.frontmatter.image.childImageSharp.sizes} 
                      />
                      <div
                        className={"details tc absolute pa3-l pa2 left-0 top-0 w-100 lh-title" + theme}
                      >
                        <h3
                          className="f3-l f4-m f5 ma0 mt1 fw4 sans-serif"
                        >
                            {title}
                        </h3>
                        
                      </div>
                      <div
                        className={"details tc absolute pa3-l pa2 left-0 bottom-0 w-100 lh-title" + theme}
                      >
                        <p
                          className="f3-l f4-m f5 ma0"
                          >
                          {price}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </section>
          ))
        }
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            by
            price
            theme
            image {
                childImageSharp{
                    sizes(maxWidth: 2000) {
                        ...GatsbyImageSharpSizes_noBase64
                    }
                }
            }
          }
        }
      }
    }
  }
`
