import './Contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import React from 'react';
import phone from '../../../Img/Phone_icon.png'
import email from '../../../Img/email.png'
import address from '../../../Img/address.png'

const Contact = () => {
    let formRef = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_yy0l1cx', 'template_6c9yxgq', formRef.current, 'user_yjwbvUwE9uV38jOIolP7w')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                formRef = ""
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id="contact" className="container mt-5 contact">
            <h1 className="text-center contact-text">
                Contact
            </h1>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <h1 className="contact-title">
                        Contact With Me
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone} alt="" className="contact-icon" />
                            +8801515668345
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="" className="contact-icon" />
                            xahin.mahir@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={address} alt="" className="contact-icon" />
                            Dhaka Uddan, Mohammadpur, Dhaka, Bangladesh.
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-lg-6 mt-3 '>
                    <h3 className="share">Share Your Message With Me!</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required />
                        <input type="text" placeholder="Subject" name="user_subject" required />
                        <input type="email" placeholder="Email" name="user_email" required />
                        <textarea rows='5' placeholder="Message" name="message" required />
                        {done && <p className='text-success fs-3'>Thank you for your message!</p>}
                        <button className="btn btn-success w-25 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;