import React from 'react';
import propTypes from 'prop-types';
import '../style/SignIn.css';
// import {Button} from 'semantic-ui-react';

 class Contact extends React.Component {
   state = {

     //creating the data variable that holds the email and password to be passed on
     data: {
       email: '',
       password: ''
     },
     loading: false,
     errors: {}
   };

   //Checks for the change of state and then loads the data entered in the form to the state.
   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
     //Prevents the page from refreshing while submitting a form
     e.preventDefault();
     //This submits the data to the parent component.
     this.props.submit(this.state.data);
     //alert('Username is: ' + username.data.email);
   };

   render() {
     const {data} = this.state;

     return(
        <div>
        
        <form onSubmit = {this.onSubmit} className="form">
        <h3 className="h3">Sign In</h3>
            <label htmlFor="email" className="label" ><b>Email</b></label>
            <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>

            <br/><br/>

            <label htmlFor="password" className="label"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>


            <br/><br/>
            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                <p className="forgot-password text-right">
                    <a href="/SignUP" >Registration</a>
                </p>

            
        </form>
</div>

     );
    }
}

Contact.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default Contact;
