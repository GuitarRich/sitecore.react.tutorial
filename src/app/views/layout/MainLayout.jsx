import React from "react";
import Placeholder from "sitecore.react.placeholders";

export default class MainLayout extends React.Component{
    render() {
        return (
            <div id="main-container">
                <header class="navbar navbar-default navbar-static-top container-fluid">
                    <Placeholder placeholderKey={'header'} placeholder={this.props.placeholder}>
                        <div class="navbar-header">
                            <h1 class="navbar-brand">Sitecore.React: Frontend Site</h1> 
                        </div>
                    </Placeholder>
                </header>

                <main role="main" class="container">
                    <Placeholder placeholderKey={'main'} placeholder={this.props.placeholder}>
                        {this.props.children}
                    </Placeholder>
                </main>

                <footer class="footer bg-primary">
                    <Placeholder placeholderKey={'footer'} placeholder={this.props.placeholder}>
                    <div class="container">
                        <p>Footer content goes here</p>
                    </div>
                    </Placeholder>
                </footer>
            </div>
        );
    }
}