import logo from './logo.svg';
import './style/App.css';
import reactDom from 'react-dom';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import RegistrationPage from './components/pages/SignUp';
import LoginPage from './components/pages/SignIn';
import Interface from './components/pages/Interface';
import LandingPage from './components/pages/LandingPage'
import Navvy from './Navbar';
import {Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Navvy/>
    <Route exact path="/Interface" component={Interface}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Blog" component={Blog}/>
    <Route exact path="/SignUP" component={RegistrationPage}/>
    <Route exact path="/SignIn" component={LoginPage}/>
    <Route exact path="/landing" component = {LandingPage}/>
    </>
  );
}

export default App;
