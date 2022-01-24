import React, { Component } from "react";

function SignUp() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Your User ID: </label>
                    <input type="text" className="UserID" placeholder="#" disabled />
                </div>


                <div className="form-group">
                    <label>Enter Password:</label>
                    <input type="password" className="Password" placeholder="Enter Password" />
                </div>

                <div className="form-group">
                    <label>Re-Enter Password:</label>
                    <input type="password" className="Password" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }

export default SignUp;