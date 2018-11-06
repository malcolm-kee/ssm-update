const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processPhoto = photo => {
    const nodeId = createNodeId(`pixabay-photo-${photo.id}`)
    const nodeContent = JSON.stringify(photo)

    const nodeData = Object.assign({}, photo, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `PixabayPhoto`,
        content: nodeContent,
        contentDigest: createContentDigest(photo),
      },
    })

    return nodeData
  }

  const apiOptions = queryString.stringify(configOptions)

  const apiUrl = `https://pixabay.com/api/?${apiOptions}`

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach(photo => {
        const nodeData = processPhoto(photo)

        createNode(nodeData)
      })
    })
}
