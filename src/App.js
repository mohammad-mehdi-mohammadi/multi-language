import React, {useState, Suspense} from "react";
import './App.css';
import {BrowserRouter, Link, Route, Switch, useRouteMatch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {useTranslation} from "react-i18next";
import {useLocation, useParams} from "react-router";

function App() {
    const {i18n} = useTranslation()
    if (i18n.dir() === 'ltr') {

        import ('./assets/css/bootstrap.min.css');
    } else {
        import ('./assets/css/bootstrap.rtl.min.css');
    }

    return (

        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/en">

                        <Route exact path='/en'>
                            <Home/>
                        </Route>
                        <Route path={`/en/topics`}>
                            <h3>Please select a topic.</h3>
                        </Route>
                    </Route>
                    <Route path="/de">
                        <Route exact path='/de'>
                            <Home/>
                        </Route>
                        <Route path='/de/topics'>
                            <h3>Please select a topic DE </h3>
                        </Route>
                    </Route>
                    <Route path="/fa">
                        <Route exact path='/fa'>
                            <Home/>
                        </Route>
                        <Route path='/fa/topics'>
                            <h3>Please select a topic. FA </h3>
                        </Route>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default App;
