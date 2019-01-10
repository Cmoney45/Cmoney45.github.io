// client.src.pages.Home.js

import React, { Component } from "react";
import BodyHeader from "../components/BodyHeader";
import ContactForm from "../components/ContactForm";

class Home extends Component {

  render() {
    return (
      <div>
        <BodyHeader headerTitle="Contact Me" />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
