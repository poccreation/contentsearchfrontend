import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav class="navbar  navbar-light" style={{backgroundColor:'#E8E8E8'}}>
          <Link className="navbar-brand" href="/">
              <img src="https://www.sunlife.com/content/dam/sunlife/regional/global-marketing/images/com/Sun_Life_weblogo_127x31.svg"
                  height="60"
                  alt="Sunlife Logo"
                  loading="lazy" />
          </Link>
    </nav>
    </header>
  );
};


export default Header;