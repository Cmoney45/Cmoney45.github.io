// client.src.pages.Contact.js

import React, { Component } from "react";
import BodyHeader from "../components/v2/BodyHeader";
import ContactForm from "../components/v2/ContactForm";
import Wrapper from "../components/v2/Wrapper";

class Contact extends Component {

  render() {
    return (
      <Wrapper
        pageName="contact"
        styleNumber="4"
      >
        <div className="container medium">
          <div>
            <BodyHeader headerTitle="Contact Me" />
            <ContactForm />
          </div>
        </div>
      </Wrapper>

    );
  }
}

export default Contact;
