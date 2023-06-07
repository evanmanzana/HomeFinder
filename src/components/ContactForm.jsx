import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mnqyknyo");
  if (state.succeeded) {
    return <p>Thanks! We'll Get back to you!</p>;
  }
  return (
    <div className="contact_container">
      <h2>Send us a message!</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="contact-home__form-group">
          <div className="contact-home__form-item">
            <label htmlFor="email" placeholder="Your Name">
              Name
            </label>
            <input id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="contact-home__form-item">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="contact-home__form-item">
          <label>Message</label>
          <input id="message" name="message" type="text" />
          <ValidationError
            prefix="Message"
            field="message"
            type="text"
            errors={state.errors}
          />
        </div>

        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
