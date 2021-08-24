import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./trans/en.json";
import common_de from "./trans/de.json";
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    // <BrowserRouter>
    //     <App/>
    // </BrowserRouter>
    ,
    document.getElementById('root')
);

