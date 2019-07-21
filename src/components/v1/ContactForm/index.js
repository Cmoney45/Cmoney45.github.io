// client.src.components.ContactForm

import React, { Component } from "react";
import "./style.css";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form method="POST" action="https://formspree.io/cmoney11550@gmail.com">
          <div className="row gtr-50">
            <div className="col-6 col-12-mobile">
              <input type="text" className="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" className="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" value="Send Message" /></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;