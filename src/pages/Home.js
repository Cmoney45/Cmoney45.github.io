// client.src.pages.Home.js

import React, { Component } from "react";
import Wrapper from "../components/v2/Wrapper";

class Home extends Component {

    render() {
        return (
            <Wrapper
                pageName="top"
                styleNumber="3"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-5-large col-12-medium">
                            <span className="image fit">
                                <img src="images/cSchererPicture.jpg" alt="Me"></img>
                            </span>
                        </div>
                        <div className="col-8 col-7-large col-12-medium">
                            <header>
                                <h1>My name is <strong>Colton Scherer</strong></h1>
                            </header>
                            <p>And I am an Accountant and aspiring computer programmer.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Home;
