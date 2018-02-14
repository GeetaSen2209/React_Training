import React from "react";
import Header from './Header.js';

export class Root extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-xs-10">
                        <Header />
                    </div>
                </div>
                <div className="row"> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}