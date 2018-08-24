import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className="intro-box" data-parallax-bg="">
        <div className="box-img-wrapper">
          <div className="box-img">
            <span
              style={{
                width: "100%",
                display: "block",
                backgroundImage: `url(${
                  !this.props.bg
                    ? 'https://d3sgyrafn929g0.cloudfront.net/wp-content/uploads/sites/13/2016/03/14110631/slide-bg-5.jpg'
                    : this.props.bg})`
              }}
            ></span>
          </div>
        </div>
        <div className="intro-box-inner container">
          <div className="box-content align-center">
            <h2
              className="page-title"
              dangerouslySetInnerHTML={{
                __html: this.props.title
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Hero