import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";



function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about-me' component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
