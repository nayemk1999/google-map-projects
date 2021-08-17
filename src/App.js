import './App.css';
// import "tailwindcss/tailwind.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route to="/home">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
