import React from 'react'

import Layout from '../layout';
import Hero from '../components/hero'
import LatestPosts from '../components/blog/latest-posts'

const parsePostObject = (postObject) => ({
  title: postObject.title.rendered,
  image: postObject.featured_media_url,
  author: postObject._embedded.author[0],
  publishDate: postObject.date,
  category: postObject._embedded['wp:term'][0][0].name,
  excerpt: postObject.excerpt.rendered,
  content: postObject.content.rendered,
  slug: postObject.slug,
});

class IndexPage extends React.Component {
  static async getInitialProps() {
    const url = `https://public-api.wordpress.com/wp/v2/sites/mygatsby.home.blog/posts?_embed`;
    const res = await fetch(url);
    const postsArray = await res.json();
    return {
      posts: postsArray.map(parsePostObject),
    }
  }

  render() {
    return (
      <Layout>
        <Hero title="Gatsby RnD" />
        <section className="section section-about no-margin">
          <div className="section-title container align-center">
            <h2>Hi people<span>Welcome to your new Gatsby site.</span></h2>
          </div>
        </section>
        <LatestPosts data={this.props.posts} />
      </Layout>
    )
  }
}

export default IndexPage