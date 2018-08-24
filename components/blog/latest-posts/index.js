import React from 'react'
import Link from 'next/link'

const ThumbNail = ({ post }) => (
  <div className="col-md-7">
    <div className="blog-post-preview-wrapper">
      <div className="blog-post-preview">
        <div className="post-cover">
          <ul className="clean-list post-meta">
            <li>{post.author && post.author.name}</li>
            <li>{post.publishDate}</li>
            <li>{post.category && post.category[0] || post.categories && post.categories[0].name}</li>
          </ul>
          <img width="972" height="450" src={post.image} alt="blog preview cover" />
        </div>
        <div className="post-body align-center">
          <h3 className="post-title">
            <Link href={`/blog/${post.slug}`}>
              <a
                dangerouslySetInnerHTML={{
                  __html: post.title
                }}
              />
            </Link>
          </h3>
          <p className="post-excerpt" dangerouslySetInnerHTML={{
            __html: post.description && post.description.description || post.excerpt
          }}></p>
          <Link href={`/blog/${post.slug}`} className="btn template-btn-1">Read more</Link>
        </div>
      </div>
    </div>
  </div>
)

const ThumbNailFeatured = ({ post }) => (
  <div className="col-md-10">
    <div className="blog-post-preview-wrapper">
      <div className="blog-post-preview featured">
        <div className="post-cover">
          <ul className="clean-list post-meta">
            <li>{post.author && post.author.name}</li>
            <li>{post.publishDate}</li>
            <li>{post.category && post.category[0] || post.categories && post.categories[0].name}</li>
          </ul>
          <div className="post-body align-center">
            <h3 className="post-title">
              <Link href={`/blog/${post.slug}`}>
                <a
                  dangerouslySetInnerHTML={{
                    __html: post.title
                  }}
                />
              </Link>
            </h3>
            <p className="post-excerpt" dangerouslySetInnerHTML={{
              __html: post.description && post.description.description || post.excerpt
            }}></p>
            <Link href={`/blog/${post.slug}`} className="btn template-btn-1">Read more</Link>
          </div>
          <img width="972" height="450" src={post.image} alt="blog preview cover" />
        </div>
      </div>
    </div>
  </div>
)

const LatestPosts = (props) => (
  <section className="section section-blog no-margin latest-posts">
    <div className="section-wrapper">
      <div className="section-title container align-center">
        <h2>Latest posts<span>new from blog</span></h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-20 col-lg-offset-2">
            <div className="row">
              {props.data.map((post, index) =>
                index === 1 ? <ThumbNailFeatured key={post.id} post={post} /> : <ThumbNail key={post.id} post={post} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default LatestPosts