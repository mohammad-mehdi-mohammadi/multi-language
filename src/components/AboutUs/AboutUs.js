import * as React from "react";
import styles from './AboutUs.module.sass'
import LanguagePicker from "../../_modules/context/LanguagePicker";
import Translate from "../../_modules/locales/Translate";

const AboutUs = (props) => {

    return (
        <>
            <div>
                <h1>About me</h1>

                <p><Translate string={'about-me.name'}/></p>

            </div>
        </>
    );
}

export default AboutUs;
