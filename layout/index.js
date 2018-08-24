import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../components/header';
import '../static/style.css';

const Layout = ({ children }) => (
  <div className="page-wrapper">
    <Head>
      {/* <title>{data.site.siteMetadata.title}</title> */}
      <meta name="description" content="This is a sample Gatsby website for internal RnD Project." />
      <meta name="keywords" content="gatsby, react, documentation" />
    </Head>
    <Header siteTitle="TEST" />
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);

export default Layout;

