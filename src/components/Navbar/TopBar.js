import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./TopBar.css";
import Dashboard from "../icons/Dashboard.png";
import Cart from "../icons/Order Stat.png";
import Chart from "../icons/Order.png";
import Banner from "../icons/PromoBan.png";
import Inventory from "../icons/Inven.png";
import Tables from "../icons/Table.png";
import Qr from "../icons/Qr.png";
import People from "../icons/Customer.png";
import Settings from "../icons/VectorSettings.png";
import Logout from "../icons/Logout.png";
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
            <li className="menuitem">
              <NavLink to="/customer" activeClassName='is-active' className="menulinks">
                Customer
              </NavLink>
            </li>
            <li className="menuitem ">
              <NavLink to="/help" activeClassName='is-active' className="menulinks">
                Help
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
