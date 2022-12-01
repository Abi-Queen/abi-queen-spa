import React, { useState } from 'react'

import { validateEmail } from '../../utils/helpers'

function ContactForm () {
    const [formState, setFormState] = useState({ name: '', emali: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log('Submit form', formState)
            setErrorMessage('Thanks! I look forward to chatting with you.')
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Please enter a valid email address')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter ${e.target.name}.`)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log('Handle form', formState)
        }
    }

    return(
        <section className="container" id="contact">
            <h1 data-testid="h1tag">Contact me</h1>
            <div className="d-flex">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className="row">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm