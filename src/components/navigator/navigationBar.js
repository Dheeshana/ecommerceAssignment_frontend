import React, {Component} from "react";
import {Link} from 'react-router-dom';

class navigationBar extends Component{
    render() {
        return(
            <nav className={"navbar navbar-dark bg-info navbar-expand-lg"}>
                <Link to={"/"} className={"navbar-brand"}><i className={"fa fa-home"}/>Home</Link>
                <div className={"collapse navbar-collapse"}>
                    <ul className={"navbar-nav mr-auto"}>
                        <li className={"navbar-item"}>
                            <Link to={"/add"} className={"nav-link"}><i className={"fa fa-database"}/> Add Items</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/addcategory"} className={"nav-link"}><i className={"fa fa-database"}/> Add Category</Link>
                        </li>
                    </ul>

                    <ul className={"navbar-nav"}>
                        <li className={"navbar-item"} >
                            <Link to={"/logIn"} className={"nav-link"}> Log In</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/register"} className={"nav-link"}> Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navigationBar;
