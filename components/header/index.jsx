import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <nav>
      <ul>
        <li>
          <Link href="/" className="current-menu-item">
            <a>{siteTitle}</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/blog">Blog</Link>
          <ul className="children">
            <li>
              <Link href="/blog/cf">
                <a>Contentful</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/wp">
                <a>WordPress</a>
              </Link>
            </li>
          </ul>
        </li>
        <li><Link href="/documentation">Documentation</Link></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
