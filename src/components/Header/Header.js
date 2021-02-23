import * as React from "react";
import styles from './Header.module.sass'
import {NavLink} from "react-router-dom";
import LanguagePicker from "../../_modules/context/LanguagePicker";

const Header = (props) => {

    return (
        <>
            <LanguagePicker changeLanguage={props.changeLanguage} />
            <div className={styles.headerArea}>
                <NavLink to="/" activeClassName={styles.active}>
                    Home
                </NavLink>
                <NavLink to="/home" activeClassName={styles.active}>
                    Live Search
                </NavLink>
            </div>


        </>
    );
}

export default Header;
