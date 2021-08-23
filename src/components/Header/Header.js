import * as React from "react";
import styles from './Header.module.sass'
import LanguagePicker from "../../_modules/context/LanguagePicker";

const Header = (props) => {

    return (
        <>
            <LanguagePicker changeLanguage={props.changeLanguage}/>
        


        </>
    );
}

export default Header;
