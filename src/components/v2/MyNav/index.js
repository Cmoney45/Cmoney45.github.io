// client.src.components.MyNav

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

export default class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "",
    };
  }

  componentDidMount() {
    this.setState(
      {
        currentPage: window.location.pathname
      }
    )
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
      <nav
        id="nav"
      >
        <ul className="container">
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
            </li>

          ))}
        </ul>
      </nav>
    );
  }
}
