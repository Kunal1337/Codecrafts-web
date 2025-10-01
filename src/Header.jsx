import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#e1d6ff' }}>
      <h1>Welcome to the <span id="txt-red">CodeCraft</span> Labs Intranet</h1>
      <nav>
        <ul className="nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="emp_mgmt.html">Employee Management</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;