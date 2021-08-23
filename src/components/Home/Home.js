import * as React from "react";
import styles from './Home.module.sass'
import Translate from "../../_modules/locales/Translate";
import AboutUs from "../AboutUs/AboutUs";

const Home = (props) => {
    
    return (
        <>
            <div className = {styles.dark}>
                
                <div className = {"primary-color " + styles.homeArea}>

                    

                    <p><Translate string={'where-i-am-from.milton-keynes'}/></p>
                    <p><Translate string={'where-i-am-from.huddersfield'}/></p>
                    <p><Translate string={'where-i-am-from.amsterdam'}/></p>


                    <h1>About me</h1>
                    <AboutUs/>
                </div>
            </div>
        </>
    );
}

export default Home;
