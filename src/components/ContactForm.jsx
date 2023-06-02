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
        <label htmlFor="email" placeholder="Your Name">
          Name
        </label>
        <input id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" placeholder="Your Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
