import React from "react";

class PageTitle extends React.Component {
    render() {
        return (
            <header>
                <h1 dangerouslySetInnerHTML={{__html: this.props.data.Title}}></h1>
            </header>
        );
    }
};

export default PageTitle;