// components/AboutContactSection.js
'use client'
import Image from 'next/image'
import './AboutContactSection.css' // your external CSS file

export default function AboutContactSection() {
  return (
   <>
    <section className="ac-section ">
      <div className="ac-container">
        {/* --- About Us Section --- */}
        <div className="ac-about about-container">
          <h2 className="ac-title mt-5">ABHINAVI CREATIONS</h2>
          <p className="ac-description">
            We are not just a jeans brand — we are a movement. Abhinavi Creation blends raw street fashion with
            next-gen comfort. Every pair tells a story of rebellion, confidence, and creativity.
          </p>
          <div className="ac-cards">
            <div className="ac-card">
              <h3> Premium Fit</h3>
              {/* <h3>👖 Premium Fit</h3> */}
              <p>Tailored to perfection for every body type.</p>
            </div>
            <div className="ac-card">
              <h3>🧵 High-Quality Denim</h3>
              <p>Durable, breathable, and always in style.</p>
            </div>
            <div className="ac-card">
              <h3>💥 Street Style</h3>
              <p>Bold designs that make a statement.</p>
            </div>
          </div>
        </div>
       </div>
       </section>
               {/* --- Contact Us Section --- */}
    <section>           
        <div className='container'>
        <div className="ac-contact">
          <div className="ac-contact-left">
            <h3 className="ac-subtitle text-center"> Contact Us</h3>
            <p className="ac-contact-text text-center">Want to collaborate or just say hey? We d love to hear from you.</p>
            <form className="ac-form">
              <input type="text" placeholder="Your Name" className="ac-input" />
              <input type="email" placeholder="Email Address" className="ac-input" />
              <textarea placeholder="Your Message" className="ac-textarea"></textarea>
              <button type="submit" className="ac-button">Send Message</button>
            </form>
          </div>
          <div className="ac-contact-right">
            <Image
              src="/p7.jpg"
              alt="Contact Jeans"
              width={400}
              height={550}
              className="ac-image"
              />
          </div>
        </div>
      </div>
              </section>
   </>
  )
}
