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
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14949984.646450078!2d90.42194549999999!3d23.822204699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1654691380664!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231.430280978913!2d81.0063509!3d26.908015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd55b9550647%3A0x5136d6cdaa695c2c!2sWebsofy%20Software%20Pvt.%20Ltd.%20Best%20Digital%20Marketing%20Company%20In%20Lucknow%20(IT%20Company%20in%20Lucknow)!5e0!3m2!1sen!2sin!4v1705557019950!5m2!1sen!2sin"
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
