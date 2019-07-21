import React, { Component } from 'react';
import "./style.css";

export default class MyNavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <article id="footer">
            <div className="container medium" >
                <div className="col-12">
                    <hr />
                    <h3>Find me on ...</h3>
                    <ul className="social">
                        {/* <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li> */}
                        <li>
                            <a href="https://www.linkedin.com/in/colton-scherer-11161b83/"
                                target="_blank"
                                rel="noopener"
                                className="icon brands fa-linkedin-in"
                            >
                                <span className="label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Cmoney45"
                                target="_blank"
                                rel="noopener"
                                className="icon brands fa-github"
                            ><span className="label">Github</span>
                            </a>
                        </li>
                        {/* <li><a href="#" class="icon solid fa-rss"><span>RSS</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-instagram"><span>Instagram</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-foursquare"><span>Foursquare</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-skype"><span>Skype</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-soundcloud"><span>Soundcloud</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-youtube"><span>YouTube</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-blogger"><span>Blogger</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-flickr"><span>Flickr</span></a></li> */}
                        {/* <li><a href="#" class="icon brands fa-vimeo"><span>Vimeo</span></a></li> */}
                    </ul>
                    <hr />
                </div>
                <footer>
                    <ul id="copyright">
                        <li>&copy; Colton Scherer. All rights reserved.</li>
                        <li>Design by: <a href="http://html5up.net">HTML5 UP</a></li>
                        <li>Configured to React by: Colton Scherer</li>
                    </ul>
                </footer>
            </div >
            </article>
        );
    }
}
