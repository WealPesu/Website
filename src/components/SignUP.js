import React from 'react';
import propTypes from 'prop-types';
// import {Button } from 'semantic-ui-react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"


 class SignUp extends React.Component {
   state = {

     //Creats an object that can store the variables
     data: {
       username: '',
       email: '',
       password: '',
       admin:'false'
     },
     loading: false,
     errors: {}
   };

   //Checks for the change of state and then assigns the form data to the state.
   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state.data);
      //This checks if the user wants to be an admin and changes it to false to avoid security risks. It also notifies that a specified user wants to be an admin.
      //We can replace the "alert()" function that displays the admin status of a user with a sendEmail function that notifies the platform architect.
      
      this.props.submit(this.state.data);
   };

   render() {
     const {data} = this.state;

     return(

      <div>
      <form onSubmit = {this.onSubmit} className="form">
          <h3 className="h3">Sign Up</h3>

          <div className="form-group">
          <label htmlFor="username" className='label'>UserName:</label>
          <input type="username" placeholder="Username" id="username" name="username" value={data.username} onChange = {this.onChange} required/>
          </div>
        

          <div className="form-group">
          <label htmlFor="email" className='label'>Email</label>
          <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>
          </div>
          
        <div>
          <label htmlFor="password" className='label'>Password</label>
          <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
          
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
                    <a href="SignIn">Already registered sign in?</a>
          </p>
      </form>
    </div>

     );
    }
}

SignUp.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default SignUp;