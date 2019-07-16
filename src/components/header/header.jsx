import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
    <div className="container d-flex justify-content-between align-items-center pt-5">
      <Link to='/'>
        <h2 className="head">HearthStone</h2>
      </Link>
    </div>
  );
};

export default Header;