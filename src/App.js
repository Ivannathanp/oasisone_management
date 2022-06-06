import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/Navbar/TopBar";
import Login from "./components/pages/LoginPage/ValidateLoginPage";
import Tenant from "./components/pages/TenantPage/TenantPage";
import Customer from "./components/pages/CustomerPage/CustomerPage";

import "./App.css";

//Auth & redux
import AuthRoute from "./components/Auth/routes/AuthRoute";
import BasicRoute from "./components/Auth/routes/BasicRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    //basename="/oasisone_admin"
    <Router>
      {checked && (
        <div className="app">
          <Switch>
            <Route path="/" exact component={Login} />
            <BasicRoute path="/login/:userEmail?" exact component={Login} />
            <div className="box">
              <div className="top">
                <TopBar />
              </div>
              <div className="bottom  " style={{height: 'calc(100vh-97px)'}}>
                <AuthRoute path="/tenant" exact component={Tenant} />

                <AuthRoute path="/customer" exact component={Customer} />

              </div>
            </div>
          </Switch>
        </div>
      )}
    </Router>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
