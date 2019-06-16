import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Pupster
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={window.location.pathname === '/' ? 'active' : null}>
          <Link to="/">About</Link>
        </li>
        <li
          className={
            window.location.pathname === '/discover' ? 'active' : null
          }>
          <Link to="/discover">Discover</Link>
        </li>
        <li
          className={window.location.pathname === '/search' ? 'active' : null}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
