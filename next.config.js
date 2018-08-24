const withCSS = require('@zeit/next-css');
const fetch = require('isomorphic-unfetch')

module.exports = withCSS({
  cssModules: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  async exportPathMap() {
    const url = `https://public-api.wordpress.com/wp/v2/sites/mygatsby.home.blog/posts?_embed`;
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch(url)
    const postList = await response.json()

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/blog/${post.slug}`]: {
            page: '/blog-post',
            query: { slug: post.slug }
          },
        }),
      {},
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  }
});
