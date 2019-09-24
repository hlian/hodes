/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs').promises

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data: { allFile : { edges } } } = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: {eq: "data"}
        }
      ) {
        edges {
          node {
            id
            name
            absolutePath
          }
        }
      }
    }
  `)
  for (const edge of edges) {
    const content = await fs.readFile(edge.node.absolutePath, {encoding: 'utf8'})
    actions.createPage({
      path: edge.node.name,
      component: require.resolve('./src/components/DataEdge.tsx'),
      context: { slug: edge.name, content },
    })
  }
}
