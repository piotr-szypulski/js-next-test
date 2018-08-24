import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <nav>
      <ul>
        <li><Link to="/" className="current-menu-item">{siteTitle}</Link></li>
        <li className="menu-item-has-children">
          <Link to="/blog">Blog</Link>
          <ul className="children">
            <li><Link to="/blog/cf">Contentful</Link></li>
            <li><Link to="/blog/wp">WordPress</Link></li>
          </ul>
        </li>
        <li><Link to="/documentation">Documentation</Link></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
