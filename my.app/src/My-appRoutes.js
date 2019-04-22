import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reviews from './components/Reviews';

function Index() {
  return <h2>Home</h2>;
}

function Reviews() {
  return <h2>Reviews</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reviews/">Reviews</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Info} />
        <Route path="/reviews/" component={Reviews} />
        <Route path="/users/" component={Users} />
      {/* </div> */}
    </Router>
  );
}

export default AppRouter;