import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  const activeHandler = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeHandler} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={activeHandler}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" className={activeHandler}>
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
