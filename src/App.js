import logo from "./logo.svg";
import "./style/App.css";
import reactDom from "react-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import SignUP from "./components/SignUP";
import SignIn from "./components/SignIn";
import Interface from "./components/Interface";
import Navvy from "./Navbar";
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navvy />
      <Route exact path="/Interface" component={Interface} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/SignUP" component={SignUP} />
      <Route exact path="/SignIn" component={SignIn} />
    </>
  );
}

export default App;
