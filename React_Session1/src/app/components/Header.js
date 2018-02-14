import React from "react";
import { Link } from "react-router";
/* export const Header  = (props)=>{
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.headerLink}</a></li>
                        </ul>     
                    </div>
                </div>
            </nav>
        );
}; */

/* export class Header extends React.Component{
    render() {
        return (
        <nav className="navbar navbar-default">
            <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                             <li><a href="#">Home</a></li>
                         </ul>     
                     </div>
                   </div>
        </nav>
        )
    }
} */

const Header = (props) => {
    return (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li><Link to={"/home"} activeStyle={{color:"red"}}>Home</Link></li>
                    <li><Link to={"/user/10"}>User</Link></li>
                </ul> 
            </div>
        </div>
    </nav>
    )
}

export default Header;