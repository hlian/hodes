import React from 'react'
import Layout from '../components/layout'

export default ({ ...data }) => {
  return (
    <Layout>
      <article
        dangerouslySetInnerHTML={{
          __html: data.pageResources.json.pageContext.content,
        }}
      />
    </Layout>
  )
}
