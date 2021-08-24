import React, { PureComponent } from "react";
import { LocaleContext } from "./../context/locale-context";

import en from "./en.json";
import es from "./es.json";
import nl from "./nl.json";
import fa from "./fa.json";

export default class Translate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es,
        nl,
        fa
      }
    };
  }
  render() {
      const {langs} = this.state 
      const {string} = this.props
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }
}
