import React from 'react';


function ContactForm() {

    // JSX

    /* ue to keywords reserved in JavaScript, we need to replace the for attribute 
    in the <label> element to htmlFor, just as class had to be changed to className
     previously.*/
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
          // name input
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
          // email input
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
          // message text area
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;