import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import '../styles/global.css'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Merhaba</h1>
    <p>React tabanlı framework olan <a style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer" href="https://www.gatsbyjs.org">Gatsby</a> ve headless cms olarak tabir edilen <a style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer" href="https://www.strapi.io">Strapi</a> içerik yönetim sistemi ile geliştirdiğim blog sayfama hoşgeldiniz.</p>
    <p>Blog yazılarımı ve notlarımı artık buradan paylaşabilirim.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id} className="article" >
          <h3>
            <Link to={`/${document.node.id}`}>*{document.node.title}</Link>
          </h3>
          <div className="article-content">
            <Img className="article-img" fixed={document.node.image.childImageSharp.fixed} />
            <div className="article-text">
              <Link to={`/${document.node.id}`}>
                <ReactMarkdown className="indexArticle" source={document.node.content.substring(0, 200).concat("...")} escapeHtml={false} />
              </Link>
              <div className="article-bottom">
                <div>{document.node.created_at}</div>
                <Link className="read-more" to={`/${document.node.id}`}>Okumaya devam et &gt; </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle(sort: {fields: id, order: ASC}) {
      edges {
        node {
          id
          title
          subtitle
          created_at(formatString: "DD MMMM, YYYY", locale: "tr-TR")
          image{
            childImageSharp{
              fixed(width: 157, height: 157) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          content
        }
      }
    }
  }
`