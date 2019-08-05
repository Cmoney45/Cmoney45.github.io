// client.src.pages.Portfolio.js

import React, { Component } from "react";
import BodyHeader from "../components/v2/BodyHeader";
import Article from "../components/v2/Article";
import portfolioData from "./portfolio.json";
import PortfolioCard from "../components/v2/PortfolioCard";

class Portfolio extends Component {

    render() {
        return (
            <Article
                class="wrapper style3"
                id="portfolio">
                <div className="container">
                    <BodyHeader
                    headerTitle="Portfolio"></BodyHeader>
                    <div className="row">
                        {portfolioData.map((slide, index) =>

                            <PortfolioCard
                                key={index}
                                index={index}
                                slides={slide}
                            ></PortfolioCard>
                        )}
                    </div>
                </div>
            </Article>
        );
    }
}

export default Portfolio;
