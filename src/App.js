import React, { createContext, useState } from "react";
import './App.css';
// import "tailwindcss/tailwind.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const DataContext = createContext();

function App() {
  const [geo, setGeo] = useState({});
  // console.log(geo);
  return (
    <DataContext.Provider value={[geo, setGeo]}>
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
    </DataContext.Provider>

  );
}

export default App;
