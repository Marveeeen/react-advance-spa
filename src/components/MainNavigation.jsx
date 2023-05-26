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
            <NavLink to="/auth?mode=login" className={activeHandler}>
              Authentication
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
