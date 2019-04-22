import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Info from './components/Info';
import Reviews from './components/Reviews';
import Error from './components/Error';
import Navigation from './components/Navigation';


  
  class AppRoutes extends Component() {
      render(){
        return (
            <Router>
              <Navigation />
              <Switch>
               <Route path="/" component={Info} exact />
              <Route path="/reviews" component={Reviews} />
              <Route component={Error}/>
              </Switch>
            </Router>
          );
      }
    
  }
  
export default AppRoutes;
