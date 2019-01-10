// client.src.pages.Portfolio.js

import React, { Component } from "react";
import BodyHeader from "../components/BodyHeader";
import Carousel from "../components/Carousel";
import portfolioData from "./portfolio.json";

class Home extends Component {

    render() {
        return (
            <div>
                <BodyHeader headerTitle="Portfolio" />
                <Carousel
                    slides={portfolioData}
                />
            </div>
        );
    }
}

export default Home;
