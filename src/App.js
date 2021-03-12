import './App.css';
import Login from './login';
import React from "react";
import { useHistory,Route, HashRouter as Router } from 'react-router-dom'


function App() {
  const history = useHistory();

  return (
      <Router>
        <Route history = {history} exact path="/" component={Login}></Route>
      </Router>
  );
}

export default App;
