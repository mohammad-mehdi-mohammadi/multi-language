import * as React from "react";

const ThemePicker = (props) => {
    const {changeTheme} = props
    return (
        <>
            <button id="dark" onClick={changeTheme}>Dark</button>
            <button id="light" onClick={changeTheme}>Light</button>

        </>
    );
}

export default ThemePicker;
