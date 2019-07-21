// client.src.components.BodyHeader

import React, { Component } from 'react';
// import "./style.css";

class BodyHeader extends Component {

    render() {
        return (
            <h2>{this.props.headerTitle}</h2>
        );
    }
}

export default BodyHeader;
