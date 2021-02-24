import React, {useState} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {LocaleContext} from "./_modules/context/locale-context";
import AboutUs from "./components/AboutUs/AboutUs";
import {LocaleTheme} from "./_modules/context/locale-theme";


function App() {
    const [preferredLocale, setPreferredLocale] = useState('en')
    const [preferredTheme, setPreferredTheme] = useState('light')

    const changeLanguage = ({currentTarget: {id}}) => {
        setPreferredLocale(id)
    };
    const changeTheme = ({currentTarget: {id}}) => {
        setPreferredTheme(id)
    };
    return (

        // <Header changeLanguage={changeLanguage}/>
        // <Home changeLanguage={changeLanguage}/>
        //
        <LocaleTheme.Provider value={preferredTheme}>
            <LocaleContext.Provider value={preferredLocale}>
                <div className="App">
                    <Header changeLanguage={changeLanguage} changeTheme={changeTheme}/>
                    <Switch>
                        <Route exact path='/' component={Home} changeLanguage={changeLanguage}/>
                        <Route exact path='/about-me' component={AboutUs} changeLanguage={changeLanguage}/>
                    </Switch>
                </div>
            </LocaleContext.Provider>
        </LocaleTheme.Provider>
    );
}

export default App;
