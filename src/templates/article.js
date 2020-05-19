import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import '../styles/global.css'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <Img fixed={data.strapiArticle.image.childImageSharp.fixed} />
    <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    <ReactMarkdown className="articleContent" source={data.strapiArticle.contentfull} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      contentfull
      image{
        childImageSharp{
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`