module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `source sans pro\:400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-fontawesome-css`
  ],
}
