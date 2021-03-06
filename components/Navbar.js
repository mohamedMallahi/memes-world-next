import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">
          M-World
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/">
                <a className="nav-link active">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/signup">
              <a className="btn btn-light">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
