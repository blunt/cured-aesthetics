import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

var title = "";
var realTitle = "";

class BlogPostTemplate extends React.Component {

  render() {
    console.log(this.props.data.markdownRemark.frontmatter.title)

    
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    const logoHomeClasses = "link dark-gray db"

    
    title = post.frontmatter.title
    realTitle = post.frontmatter.title
    const by = post.frontmatter.by
    const price = post.frontmatter.price

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="pb5-l pb4-m pb3 top-0 w-100 flex">
            <div>
              <h1
                className="ma0 dark-gray fw6 w-100 f-subheadline-l f2-m f3 lh-title sans-serif"
              >
                  {title}
              </h1>
              <div className="mt1 f2-l f3-m f4 mb2 fw3">
                By {by}
              </div>
            </div>
            <div className="ma0 fw6 left-auto f-subheadline-l f2-m f3 lh-title">
              {price}
            </div>
        </div>
        <div
          className="mb5-l mb4-m mb3 dark-gray fw4 w-100 f2-l f3-m f4 lh-title"
          dangerouslySetInnerHTML={{ __html: post.html }}
        >
        </div>
        <a className="button ba mb5-l mb4-m mb3 pv4-l pv3 ph5-l ph4 f3-l f4-m f5 dark-gray hover-bg-dark-gray dib tc ttu w-50" href="">Buy</a>
        <div
          className="w-100"
        > 
          <div className="ba b--dark-gray">
            <div className="pa5-l pa3 bg-white">
              <Img 
                sizes={post.frontmatter.image.childImageSharp.sizes}
              />
            </div>
          </div>
        </div>

        <ul
          className="list flex w-100 ma0 pv5-l pv4-m pv3"
        >
          {previous && (
            <li
              className="ma0"
            >
              <Link 
                className="bn link f-subheadline-l f2-m f4 fw4 pr4 lh-title"
                to={previous.fields.slug}
                rel="prev"
              >
                ← <span className="underline link">{previous.frontmatter.title}</span>
              </Link>
            </li>
          )}

          {next && (
            <li
              className="left-auto ma0 tr"
            >
              <Link 
                className="bn link f-subheadline-l f2-m f4 fw4 lh-title"
                to={next.fields.slug}
                rel="next"
              >
                <span className="underline link">{next.frontmatter.title}</span> →
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        by
        price
        date(formatString: "MMMM DD, YYYY")
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
`
