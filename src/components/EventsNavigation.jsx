import { NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  const token = useRouteLoaderData("root");

  const activeHandler = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={activeHandler} end>
              All Event
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="/events/new" className={activeHandler}>
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
