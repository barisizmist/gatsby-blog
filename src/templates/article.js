import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    <h3>{data.strapiArticle.subtitle}</h3>
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!, sort: "id:asc") {
    strapiArticle(id: {eq: $id}) {
      title
      content
      subtitle
      author {
        id
        username
      }
    }
  }
`