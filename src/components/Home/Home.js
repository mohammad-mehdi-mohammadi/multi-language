import * as React from "react";
import styles from './Home.module.sass'
import {useTranslation} from "react-i18next";

const Home = (props) => {
    const {t, i18n} = useTranslation('common');
    return (
        <>
            <div className = {styles.dark}>
                
                <div className = {"primary-color " + styles.homeArea}>

                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>

                    <p>{t('welcome.title')}</p>


                    <h1>About me</h1>
                    {/* <AboutUs/> */}
                </div>
            </div>
        </>
    );
}

export default Home;
