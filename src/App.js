import React, {useState} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {LocaleContext} from "./_modules/context/locale-context";


function App() {
    const [preferredLocale, setPreferredLocale] = useState('en')

    const changeLanguage = ({currentTarget: {id}}) => {
        setPreferredLocale(id)
    };
    
    return (
        <LocaleContext.Provider value={preferredLocale}>
            <div className="App">
                <Header changeLanguage={changeLanguage} />
                <Switch>
                    <Route exact path='/' component={Home} changeLanguage={changeLanguage}/>
                </Switch>
            </div>
        </LocaleContext.Provider>
    );
}

export default App;
