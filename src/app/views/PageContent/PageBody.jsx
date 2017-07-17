import React from "react";

export default class PageBody extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.data.Body }}>
            </div>
        );
    }
}