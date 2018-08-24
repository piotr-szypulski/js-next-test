import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../components/header';
import '../static/style.css';

const Layout = ({ children, data }) => (
  <div className="page-wrapper">
    <Head>
      {/* <title>{data.site.siteMetadata.title}</title> */}
      <meta name="description" content="This is a sample Gatsby website for internal RnD Project." />
      <meta name="keywords" content="gatsby, react, documentation" />
    </Head>
    <Header siteTitle="TEST" />
    <div className="content-wrapper">
      {'Gatsby RnD'}
      {/* {children()} */}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({}),
};

Layout.defaultProps = {
  children: null,
  data: {},
};

export default Layout;

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
