import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import '../styles/global.css'

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/Article_${article.id}`}>{article.title}</Link>
          </h2>
          <Img fixed={article.image.childImageSharp.fixed} />
          <ReactMarkdown className="articleContent indexArticle" source={article.contentfull.substring(0, 300).concat("...")} />
          <Link to={`/Article_${article.id}`}>Devamını oku</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        contentfull
        image{
          childImageSharp{
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
` 