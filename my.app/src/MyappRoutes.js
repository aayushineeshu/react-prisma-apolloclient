import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from './components/Info';
import Reviews from './components/Reviews';
import About from './components/About';
import OfficialTrailer from './components/OfficialTrailer';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Info} />
        <Route path="/reviews/" component={Reviews} />
        <Route path="/about/" component={About} />
        <Route path="/official-trailer/" component={OfficialTrailer} />
    </Router>
  );
}

export default AppRouter;