import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">Компания</div>
      <div className="header__user-block">
        <img className="header__avatar" alt="аватар" />
        <div className="header__text-container">
          <p className="header__text">Добро пожаловать,</p>
          <p className="header__text header__text_name">Геральд</p>
        </div>
      </div>
      <nav className="header__nav">
        <NavLink className="header__link" activeClassName="header__link_active" to="/users">Пользователи</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/settings">Настройки</NavLink>

      </nav>
    </div>
  );
}

export default Header;