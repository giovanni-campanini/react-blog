import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import SinglePage from "./components/pages/singlePage/SinglePage";
import Compose from "./components/pages/compose/Compose";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router> 
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/compose">{user ? <Compose /> : <Home />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Home />}</Route>
        <Route path="/post/:postId">
          <SinglePage />
        </Route>
      </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
