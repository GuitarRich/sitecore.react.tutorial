import React from "react";

class PageBody extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.data.Body }}>
            </div>
        );
    }
};

export default PageBody;