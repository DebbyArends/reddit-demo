import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Subreddit from "./pages/Subreddit/Subreddit";

function App() {
  return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/subreddit/:subredditId">
            <Subreddit/>
          </Route>
        </Switch>
      </>
  );
}

export default App;
