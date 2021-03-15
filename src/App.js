import './App.css';
import Login from './login';
import React from "react";
import { useHistory, Route, HashRouter as Router } from 'react-router-dom';
import Menu from "./Menu";


function App() {
    const myHistory = useHistory();
    return (
        <Router>
            <Route history = {myHistory} exact path="/" component={Login} />
            <Route history = {myHistory} path="/login" component={Login} />
            <Route history = {myHistory} path="/menu" component={Menu} />
        </Router>
    );
}

export default App;
