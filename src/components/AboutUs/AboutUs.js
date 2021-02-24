import * as React from "react";
import styles from './AboutUs.module.sass'

import Translate from "../../_modules/locales/Translate";

import {LocaleTheme} from "../../_modules/context/locale-theme";

const AboutUs = (props) => {

    return (
        <>
            <div>
                <h1>About me</h1>
                <LocaleTheme.Consumer>
                    <div>

                    </div>
                    {value => value}
                </LocaleTheme.Consumer>
                <p><Translate string={'about-me.name'}/></p>

            </div>
        </>
    );
}

export default AboutUs;
