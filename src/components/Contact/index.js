import React, { useState } from 'react';
import { validateEmail } from '../../assets/utils/helpers';

function ContactForm() {
    // add hooks
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    // destructure the formState object into its named properties, name, email, and message. 
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }
    //   console.log(formState);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }




    /* Due to keywords reserved in JavaScript, we need to replace the for attribute 
    in the <label> element to htmlFor, just as class had to be changed to className
     previously.*/
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    {/* The onChange event listener will ensure that
                     the handleChange function fires whenever a keystroke is typed into 
                     the input field for name. */}
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>

                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;