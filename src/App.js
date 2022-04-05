
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Subreddit from "./pages/Subreddit/Subreddit";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <>
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
          <Footer />
      </>
  );
}

export default App;
