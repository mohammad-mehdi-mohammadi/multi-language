import * as React from "react";

const LanguagePicker = (props) => {
    const {changeLanguage} = this.props
    return (
        <>
            <button id="en" onClick={changeLanguage}>ENGLISH</button>
            <button id="es" onClick={changeLanguage}>SPANISH</button>
            <button id="nl" onClick={changeLanguage}>DUTCH</button>

        </>
    );
}

export default LanguagePicker;
