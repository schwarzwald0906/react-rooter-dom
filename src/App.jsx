import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1detailA } from "./Page1detailA";
import { Page1detailB } from "./Page1detailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="./">Home</Link>
        <br />
        <Link to="./Page1">Page1</Link>
        <br />
        <Link to="./Page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/Page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/Page1detailA`}>
                <Page1detailA />
              </Route>
              <Route path={`${url}/Page1detailB`}>
                <Page1detailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
