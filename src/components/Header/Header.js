import * as React from "react";
import styles from './Header.module.sass'
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router";
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    const location = useLocation();
    const {t, i18n} = useTranslation()
    const history = useHistory()
    const changeLanguageHandler = (lang) => {
        const oldLanguage = i18n.dir();
        i18n.changeLanguage(lang)
        // history.push( )
        document.dir = i18n.dir();
        if (oldLanguage !== i18n.dir()) {
            // window.location.reload();
        }


    }
    const getPath = () => {
        return '/'+ i18n.language + location.pathname.substring(3);
    }
    return (
        <>
            <ul>
                <li>
                    <NavLink  to={`${'/en' + location.pathname.substring(3)}`} onClick={() => changeLanguageHandler('en')} activeClassName={styles.active}>Rendering with React</NavLink>
                </li>
                <li>
                    <NavLink  to={`${'/de' + location.pathname.substring(3)}`} onClick={() => changeLanguageHandler('de')}>Components</NavLink >
                </li>
                <li>
                    <NavLink  to={`${'/fa' + location.pathname.substring(3)}`} onClick={() => changeLanguageHandler('fa')}>Props v. State</NavLink >
                </li>
            </ul>
            {/* <LanguagePicker changeLanguage={props.changeLanguage}/> */}
            {/*<button onClick={() => changeLanguageHandler('en')}>ENGLISH</button>*/}
            {/*/!* <button id="es" onClick={changeLanguage}>SPANISH</button> *!/*/}
            {/*<button onClick={() => changeLanguageHandler('de')}>DUTCH</button>*/}
            {/*<button onClick={() => changeLanguageHandler('fa')}>فارسی</button>*/}


        </>
    );
}

export default Header;
