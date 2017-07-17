import React from "react";
import Data from "../data/data";

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      placeholder: {}
    }
  }
}
