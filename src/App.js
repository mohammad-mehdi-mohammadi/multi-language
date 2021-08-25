import React, {useState, Suspense} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {useTranslation} from "react-i18next";

function HeaderComponent()
{
    const {t, i18n} = useTranslation('common');
    return <h1></h1>
}
function App() {
    const { i18n } = useTranslation()
    if(i18n.dir() === 'ltr') {

        import ('./assets/css/bootstrap.min.css');
      } else {
        import ('./assets/css/bootstrap.rtl.min.css');
      }
    
    return (
        <div className="App">


                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>

            </div>
        // <LocaleContext.Provider value={preferredLocale}>
            
        // </LocaleContext.Provider>
    );
}

export default App;
