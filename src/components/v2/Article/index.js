// client.src.components.Article

import React, { Component } from 'react';
import "./style.css";

class Article extends Component {

    render() {
        return (
            <article
                id={this.props.id}
                className={this.props.class}
            >
                {this.props.children}
            </article>
        );
    }
}

export default Article;
