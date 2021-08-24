import * as React from "react";

const LanguagePicker = (props) => {
    const {changeLanguage} = props
    return (
        <>
            <button id="en" onClick={changeLanguage}>ENGLISH</button>
            <button id="es" onClick={changeLanguage}>SPANISH</button>
            <button id="nl" onClick={changeLanguage}>DUTCH</button>
            <button id="fa" onClick={changeLanguage}>فارسی</button>

        </>
    );
}

export default LanguagePicker;
