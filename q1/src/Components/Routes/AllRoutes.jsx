import { Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Users from "../Pages/Users";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </div>
  );
}

export default AllRoutes;
