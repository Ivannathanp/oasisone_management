import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link,  useHistory, useParams } from "react-router-dom";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {BallTriangle} from "react-loader-spinner";
import { PassTextField, TextField } from "../../Forms/FormLib";

//auth
import { connect } from "react-redux";
import { loginUser } from "../../Auth/actions/managementActions";

function ValidateLoginPage({ loginUser }) {
  const [show, setShow] = useState(false);
  let history = useHistory();
  const { userEmail } = useParams();

  return (
    <div className="backgroundcontainer">
      <div className="innerlogincontainer">
        <div className="containertitle">Management Login For La Carte</div>
        <div className="containerforms">
          <Formik
            initialValues={{ email: userEmail, password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid e-mail address")
                .required("Required"),
              password: Yup.string()
                .required("Required")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
                .max(30, "Password is too long"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              loginUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="marginedinputform">
                  <TextField
                    //label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div className="passinputform">
                  <PassTextField
                    //label="Password"
                    name="password"
                    placeholder="Password"
                  />
                </div>

                

                <div className="buttongroup">
                  {!isSubmitting && (
                    <button
                      type="submit"
                     
                      className="loginbutton"
                    >
                      {" "}
                      Login{" "}
                    </button>
                  )}
                  {isSubmitting && (
                    <BallTriangle
      
                      color="#f10c0c"
                      height={80}
                      width={80}
                    />
                  )}
                </div>

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { loginUser })(ValidateLoginPage);
