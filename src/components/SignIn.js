import React, { Component } from "react";
import "../style/SignIn.css";
function Contact() {
  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
        <label className="label-1">User ID:</label>
        <input type="text" className="UserID" placeholder="Enter Id" />
      </div>

      <div className="form-group">
        <label className="label-2">Password</label>
        <input
          type="password"
          className="Password"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          Remember me
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          {/* <label
            className="custom-control-label"
            htmlFor="customCheck1"
            className="label-3"
          >
            Remember me
          </label> */}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        className="Submit-pswd"
      >
        Sign-in
      </button>
    </form>
  );
}

export default Contact;
