import React from 'react'

const Header = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welwome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Header;
