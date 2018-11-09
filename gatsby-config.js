const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
})

module.exports = {
  siteMetadata: {
    title: 'SSM Company Act Update',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'msia-ssm',
        // dbName: 'ssm-data',
        collection: 'diffs',
        server: {
          address: process.env.DB_ADDRESS,
          port: Number(process.env.DB_PORT),
        },
        auth: {
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
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
