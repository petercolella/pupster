import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Pupster
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                window.location.pathname === '/discover'
                  ? 'nav-link active'
                  : 'nav-link'
              }>
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
