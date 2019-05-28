import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({}) => (
  <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">
        <Link to='/' className="brand-logo">
          {'PickApp'}
        </Link></span>
</nav>
)

export default Nav;