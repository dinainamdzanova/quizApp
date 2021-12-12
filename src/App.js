import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import { Div, Space, Text } from "./components/quizStyle";
import "./style.css";
import Capital from "./views/capital";
import Flag from "./views/flag";

const App = () => {
  return (
    <BrowserRouter>
      <Div align="center" justify="center">
        <Switch>
          <Route exact path="/">
            <Text weight="bold" size="44" align="center" color="#1D355D">
              Choose mode to play
            </Text>
            <Space y="20" />
            <div>
              <Link className="link" to="/flag">
                Flag
              </Link>
              <Space x="10" />
              <Link className="link" to="/capital">
                Capital
              </Link>
            </div>
          </Route>
          <Route exact path="/flag" component={Flag} />
        <Route exact path="/capital" component={Capital} />
        </Switch>
      </Div>
    </BrowserRouter>
  );
};

export default App;
