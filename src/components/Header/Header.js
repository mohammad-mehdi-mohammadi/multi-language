import * as React from "react";
import styles from './Header.module.sass'
import {NavLink} from "react-router-dom";
import LanguagePicker from "../../_modules/context/LanguagePicker";
import ThemePicker from "../../_modules/context/ThemePicker";

const Header = (props) => {

    return (
        <>
            <LanguagePicker changeLanguage={props.changeLanguage}/>
            <ThemePicker changeTheme={props.changeTheme}/>
            <div className={styles.headerArea}>
                <NavLink to="/" activeClassName={styles.active}>
                    Home
                </NavLink>
                <NavLink to="/about-me" activeClassName={styles.active}>
                    Live Search
                </NavLink>
            </div>


        </>
    );
}

export default Header;
