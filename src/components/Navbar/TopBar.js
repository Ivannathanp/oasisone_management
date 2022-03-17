import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./TopBar.css";

//auth & redux
import { connect } from "react-redux";
import { logoutUser } from "../Auth/actions/managementActions";

function TopBar({ logoutUser }) {
  let history = useHistory();

  return (
    <>
      <nav className="topbar">
        <div className="topbarcontainer">
          <div className="topbarheader">Oasis One</div>
          <ul className="menu">
            <li className="menuitem">
              <NavLink to="/tenant" activeClassName='is-active' className="menulinks">
                Tenant
              </NavLink>
            </li>
               
          </ul>
          <div className="logout">
            <NavLink
              to="/#"
              className="menulinks"
              onClick={() => logoutUser(history)}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default connect(null, { logoutUser })(TopBar);
