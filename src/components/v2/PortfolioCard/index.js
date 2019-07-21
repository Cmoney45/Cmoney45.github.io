// client.src.components.PortfolioCard

import React, { Component } from 'react';
import "./style.css";

class PortfolioCard extends Component {

    render() {

        const { slides } = this.props;

        return (
            <div className="col-4 col-6-medium col-12-small">
                <section class="box">
                    <img
                        src={slides.image}
                        alt={slides.title}
                        className="image featured"
                    >
                    </img>
                    <header>
                        <h3>
                            <a href={slides.codesite}>{slides.title}</a>
                        </h3>
                    </header>
                    <p>
                        {slides.description}
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a
                                href={slides.deployedsite}
                                className="button alt"
                            >Deployed</a>
                            </li>
                            <li><a
                                href={slides.codesite}
                                className="button alt"
                            >Code</a>
                            </li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default PortfolioCard;
