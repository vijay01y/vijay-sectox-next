import ContactForm from "@/src/forms/contact-form";
import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="contact-page pt-115 pb-115">
        <div className="container">
          <div className="contact-bg grey-bg">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="contact-map">
                 
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9871077227!2d80.77770121684478!3d26.84890282786468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718070107711!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="contact-us">
                  <div className="tp-section-box tp-section-box-2  p-relative">
                    <span className="tp-section-subtitle right d-inline-block">
                      contact us
                    </span>
                    <h2 className="tp-section-title mb-35">Get In Touch</h2>
                  </div>
                  <div className="contact">
                    <div className="contact__form">
                      <ContactForm />
                      <p className="ajax-response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
