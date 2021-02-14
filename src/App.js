import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import { Login } from "./view/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./view/Home";



class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home}  />
            </Switch>
          </Router>

      </React.Fragment>
    );
  }
}


export default App;