import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import * as Icons from "react-icons/fa";
import { useEffect, useState } from "react";

function MainNavigation() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    //for the refresh, will no change the navbar
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.name}>Navbar</div>
      <nav>
        {!mobile && (
          <ul>
            <li>
              <NavLink
                to="/"
                className={(navSelector) =>
                  navSelector.isActive ? classes.active : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={
                  (classes.sb,
                  (navSelector) => (navSelector.isActive ? classes.active : ""))
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(navSelector) =>
                  navSelector.isActive ? classes.active : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(navSelector) =>
                  navSelector.isActive ? classes.active : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}

        {mobile && (
          <div className={classes.sidebarToggle}>
            {sidebar ? (
              <Icons.FaTimes
                className={classes.sidebarToggleLogo}
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className={classes.sidebarToggleLogo}
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      {/*----------- sidebar -----------*/}
      <div className={sidebar ? classes.sidebarActive : classes.sidebar}>
        <ul className={classes.sidebarItems}>
          <li className={classes.sideItem}>
            <NavLink
              to="/"
              onClick={() => setSidebar(false)}
              className={(navSelector) =>
                navSelector.isActive ? classes.active : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className={classes.sideItem}>
            <NavLink
              to="/product"
              onClick={() => setSidebar(false)}
              className={(navSelector) =>
                navSelector.isActive ? classes.active : ""
              }
            >
              Product
            </NavLink>
          </li>
          <li className={classes.sideItem}>
            <NavLink
              to="/about"
              onClick={() => setSidebar(false)}
              className={(navSelector) =>
                navSelector.isActive ? classes.active : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className={classes.sideItem}>
            <NavLink
              to="/contact"
              onClick={() => setSidebar(false)}
              className={(navSelector) =>
                navSelector.isActive ? classes.active : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/*----------- sidebar -----------*/}
    </header>
  );
}

export default MainNavigation;
