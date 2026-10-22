import React from 'react';
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event) { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <main className="container page-section contact-page"><div className="page-heading"><p className="eyebrow">WE'RE HERE TO HELP</p><h1>Say hello<span className="brand-dot">.</span></h1><p className="muted">Questions, ideas, or just want to say hi? Send us a note.</p></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Email address<input required type="email" name="email" placeholder="jane@example.com" /></label><label>Message<textarea required name="message" rows="5" placeholder="How can we help?" /></label><button className="button" type="submit">Send message ↗</button>{sent && <p className="success-message">Thanks for reaching out! This demo form has recorded your submission locally.</p>}<p className="small-note">Demo form only — connect a backend or form service to receive messages.</p></form></main>
}
