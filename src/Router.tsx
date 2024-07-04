import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
// npm i --save-dev @types/react-router-dom

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
