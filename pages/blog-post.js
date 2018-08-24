import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import Hero from '../components/hero'

const BlogPost = ({ post }) => {
  return (
    <div>
      <Hero
        title={post.title}
        bg={post.image}
      />
      <div className="single-post-page-heading">
        <ul className="clean-list post-meta">
          <li>{post.author.name}</li>
          <li>{post.publishDate}</li>
          <li>{post.category}</li>
        </ul>
      </div>
      <section className="section section-blog no-margin">
        <div className="row">
          <div className="col-lg-12 col-lg-offset-6 col-md-18 col-md-offset-3">
            <div className="single-post-content">
              <div
                className="single-post-excerpt"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

BlogPost.propTypes = {
  post: PropTypes.object.isRequired
}

BlogPost.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const url = `https://public-api.wordpress.com/wp/v2/sites/mygatsby.home.blog/posts?slug=${slug}&_embed`;
  const res = await fetch(url);
  const postsArray = await res.json();
  const postObject = postsArray[0];
  return {
    post: {
      title: postObject.title.rendered,
      image: postObject.featured_media_url,
      author: postObject._embedded.author[0],
      publishDate: postObject.date,
      category: postObject._embedded['wp:term'][0][0].name,
      excerpt: postObject.excerpt.rendered,
      content: postObject.content.rendered,
    }
  };
}

export default BlogPost
