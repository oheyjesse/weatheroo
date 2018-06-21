import React from 'react';

import './Nav.css';

function Nav({subheader}) {
  return (
    <header className="App-header">
      <p className="App-title">Weatheroo!</p>
      <p className="Subheader-title">{subheader}</p>
    </header>
  );
};

export default Nav;