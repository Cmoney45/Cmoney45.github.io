// client.src.components.Wrapper

import React, { Component } from 'react';
import Article from "../Article";
import "./style.css";

class Wrapper extends Component {

    render() {
        const trueClassName = `wrapper style${this.props.styleNumber}`;

        return (
            <Article
                style={{ backgroundImage: 'url(" + ./images/bg.png +")'}}
                class={trueClassName}
                id={this.props.pageName}
            >
                {this.props.children}
            </Article>
        );
    }
}

export default Wrapper;
