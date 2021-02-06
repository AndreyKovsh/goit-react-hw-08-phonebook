import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    fontSize: '20px',
    display: 'inline-block',
    textDecoration: 'none',
    marginLeft: 25,
    padding: 12,
    fontWeight: 700,
    color: 'orangered',
  },
  activeLink: {
    color: 'rgb(10, 210, 10)',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Homepage
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
