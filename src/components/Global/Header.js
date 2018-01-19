import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from './images/logo.png';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { items, title } = this.props
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-title">
        <h1>{title}</h1>
        <ul className="Menu">
          {
            items && items.map(
              (item, key) => <li key={key}><Link className="list-group-item active" to={item.url}>{item.title}</Link></li>
            )
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default Header;
