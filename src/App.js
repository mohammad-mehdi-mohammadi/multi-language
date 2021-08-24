import React, {useState, Suspense} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {LocaleContext} from "./_modules/context/locale-context";

import {useTranslation} from "react-i18next";

function HeaderComponent()
{
    const {t, i18n} = useTranslation('common');
    return <h1>{t('welcome.title', {framework:'React'})}</h1>
}
function App() {
    const [preferredLocale, setPreferredLocale] = useState('en')

    const changeLanguage = ({currentTarget: {id}}) => {
        setPreferredLocale(id)
    };
    
    return (
        <Suspense fallback="loading">
            <div className="App">
                <HeaderComponent/>
            </div>
        </Suspense>
        // <LocaleContext.Provider value={preferredLocale}>
        //     <div className="App">
        //         <Header changeLanguage={changeLanguage} />
        //         <Switch>
        //             <Route exact path='/' component={Home} changeLanguage={changeLanguage}/>
        //         </Switch>
        //     </div>
        // </LocaleContext.Provider>
    );
}

export default App;
