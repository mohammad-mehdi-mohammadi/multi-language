import * as React from "react";
import styles from './Home.module.sass'
import LanguagePicker from "../../_modules/context/LanguagePicker";
import Translate from "../../_modules/locales/Translate";

const Home = (props) => {

    return (
        <>
            <div>
                <h1>About me</h1>

                <p><Translate string={'where-i-am-from.milton-keynes'}/></p>
                <p><Translate string={'where-i-am-from.huddersfield'}/></p>
                <p><Translate string={'where-i-am-from.amsterdam'}/></p>
                {/*<AboutMe />*/}
                {/*<WhereIAmFrom />*/}
            </div>
        </>
    );
}

export default Home;
