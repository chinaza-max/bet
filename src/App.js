//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./conponents/Home/home"


function App() {
    return (
      <Router>
        <Switch>
            <Route path="/"exact component={Home}/>  
        </Switch>
      </Router>
    )
}

export default App;
//  <Route path="/login" component={Login}/>
