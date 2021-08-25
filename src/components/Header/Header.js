import * as React from "react";
import styles from './Header.module.sass'
import LanguagePicker from "../../_modules/context/LanguagePicker";
import { useTranslation } from "react-i18next";
const Header = (props) => {
    const { t, i18n } = useTranslation()

    const changeLanguageHandler = (lang) =>
    {
        const oldLanguage = i18n.dir();
      i18n.changeLanguage(lang)
      console.log(i18n.dir())
      document.dir = i18n.dir();
      if(oldLanguage !== i18n.dir()) {
        window.location.reload();
      }
      
      
    }
    return (
        <>
            {/* <LanguagePicker changeLanguage={props.changeLanguage}/> */}
            <button id="en" onClick={() => changeLanguageHandler('en')}>ENGLISH</button>
            {/* <button id="es" onClick={changeLanguage}>SPANISH</button> */}
            <button id="nl" onClick={() => changeLanguageHandler('de')}>DUTCH</button>
            <button id="fa" onClick={() => changeLanguageHandler('fa')}>فارسی</button>


        </>
    );
}

export default Header;
