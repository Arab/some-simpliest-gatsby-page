module.exports = {
  
  siteMetadata: {
    title: `Title from siteMetadata`,
    description: 'this site is nothing important realy just testing some gatsby stuff',
    pageLinks: [
      {
        text: "This site doesn't have any sense",
        url: "/"
      },
      {
        text: "Hello World",
        url: "/helloworld/"
      },
      {
        text: 'createPage with context',
        url: '/page-with-context/'
      },
      {
        text: 'my pretty new page',
        url: '/pretty/'
      }
    ],
    prettyPage: {
      title: "this is pretty page",
      description: "this site is nothing important but pretty awesome",
    },
  },
  plugins: ["gatsby-plugin-styled-components"],
};
