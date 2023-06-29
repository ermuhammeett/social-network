import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.activeLink}`}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="">Music</a>
      </div>
      <div className={s.item}>
        <a href="">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
