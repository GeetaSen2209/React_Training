import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {

    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
       
        return(
            <div>
                <div> User Page </div>
                <div> User ID: {this.props.params.id} </div>
                <button onClick={this.onNavigateHome} className="btn btn-primary"> Go Home </button>
            </div>
        )
    }
}