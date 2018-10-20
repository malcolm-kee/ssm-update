const diffType = {
  date: '9999-99-99',
  records: [
    {
      section: 'Section',
      title: 'Title',
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'SSM Company Act Update',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'internal__',
        url: 'https://malcolmkee.fun/api/diffs',
        // url: 'http://localhost:3000/api/diffs',
        method: 'get',
        name: 'diffs',
        schemaType: diffType,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SSM Company Act Update',
        short_name: 'SSM Update',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
