// client.src.components.MyNav

import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Wrapper from '../Wrapper';
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
    const mainRoutes = [
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
      <header>
        <Wrapper>
          <h1>Colton Scherer</h1>
          <nav>
            <div className="btn-group">
              {mainRoutes.reverse().map(route => (
                <Link
                  to={`${route.route}`}
                  key={route.number}
                  className={this.state.currentPage === route.route ? "button currentPage" : "button"}
                  onClick={() => this.changeCurrentPage(route.route)}
                >
                  {route.text}
                </Link>
              ))}
            </div>
          </nav>
        </Wrapper>
      </header>
    );
  }
}
