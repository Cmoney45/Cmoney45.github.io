// client.src.pages.Home.js

import React, { Component } from "react";
import BodyHeader from "../components/BodyHeader";

class Home extends Component {

    render() {
        return (
            <div>
                <BodyHeader headerTitle="About Me"/>
                <div>
                    <img id="bio-img" src="images/20181210_152918.jpg" alt="Me"></img>
                    <p>My name is <b>Colton Arlin Scherer</b> and I am an aspiring
                        computer programmer. I took an intro to computer
                        science course in college, where I worked with C++.
                        From then on I wanted to learn more about programming.
                        From working at a software company as an accountant, I
                        saw web development as an important coding base to know
                        in an evolving SAAS and app based business environment.
                      </p>
                    <p> I graduated in December 2014 from Hamline University with a Bachelors
                        Degree in Business Administration, majoring in Accounting. After college,
                        I worked for a software company from February 2015 to November 2017 as an accountant.
                        I used my knowledge of coding practices to create unique excel spreadsheets
                        that would help automate and speed up the processes that I was tasked with.
                        I was often an excel-guru for various teams to help them do the same within
                        their own departments. I eventually delved into excels VBA developer module
                        and I started to ask myself if I should be tyring to learn a real coding languages
                        vs using a spreadsheet tool. Working for the company heightened my interest
                        in software development even more, as the people I met were very interesting
                        and I related with immensely. After finding accounting work outside of a software
                        environment, I knew I really wanted to get back to that type of work-life as it was
                        more challenging and interesting to me as well.
                      </p>
                </div>
            </div>
        );
    }
}

export default Home;
