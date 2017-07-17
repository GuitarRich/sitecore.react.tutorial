import React from "react";

import PageTitle from "../views/PageContent/PageTitle";
import PageBody from "../views/PageContent/PageBody"

import Data from "../data/data";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageContent: {}
    }
  }
  componentDidMount() {
    Data.getData("pageContent", (data) => {
      this.setState({
        pageContent: data
      })
    });
  }
  render() {
    return (
        <div>
          <PageTitle data={this.state.pageContent} />
          <PageBody data={this.state.pageContent} />
        </div>
    );
  }
}
