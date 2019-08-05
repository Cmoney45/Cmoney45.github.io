// client.src.components.MyNav

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

export default class spectralNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "",
            showMenu: false,

        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.setState(
            {
                currentPage: window.location.pathname
            }
        )
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    changeCurrentPage = (route) => {
        this.setState({
            currentPage: route
        })
    }

    render() {
        const navRoutes = [
            {
                text: "About",
                route: "/",
                number: 1,
            },
            {
                text: "Portfolio",
                route: "/portfolio",
                number: 2,
            },
            {
                text: "Contact",
                route: "/contact",
                number: 3,
            },
        ]

        return (
            <header id="header" className="alt">
                <h1><a href="index.html">Spectral</a></h1>
                <nav id="nav">
                    <ul>
                        <li className="special">
                            <a
                                href="#menu"
                                className="menuToggle"
                                onClick={this.showMenu}
                            >
                                <span>Menu</span>
                            </a>
                            {
                                this.state.showMenu
                                    ? (
                                        <div
                                            // className="menu"
                                            id="menu"
                                            ref={(element) => {
                                                this.dropdownMenu = element;
                                            }}
                                        >
                                            <ul>
                                                {navRoutes.map(route => (
                                                    <li
                                                        key={route.number}>
                                                        <Link
                                                            to={`${route.route}`}
                                                            key={route.number}
                                                            className={this.state.currentPage === route.route ? "currentPage" : ""}
                                                            onClick={() => this.changeCurrentPage(route.route)}
                                                        >
                                                            {route.text}
                                                        </Link>
                                                    </li>))}
                                            </ul>
                                        </div>
                                    ) : (null)
                            }
                        </li>
                    </ul>
                </nav>
            </header>
            // <nav
            //     id="nav"
            // >
            //     <ul className="container">
            //         {navRoutes.map(route => (
            //             <li
            //                 key={route.number}>
            //                 <Link
            //                     to={`${route.route}`}
            //                     key={route.number}
            //                     className={this.state.currentPage === route.route ? "currentPage" : ""}
            //                     onClick={() => this.changeCurrentPage(route.route)}
            //                 >
            //                     {route.text}
            //                 </Link>
            //             </li>

            //         ))}
            //     </ul>
            // </nav>
        );
    }
}
