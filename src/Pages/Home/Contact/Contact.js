import './Contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import React from 'react';
import phone from '../../../Img/Phone_icon.png'
import emailIcon from '../../../Img/email.png'
import address from '../../../Img/address.png'
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';








const Contact = () => {
    let formRef = useRef();
    const [done, setDone] = useState(false)
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [position] = useState('bottom-end');

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_yy0l1cx', 'template_6c9yxgq', formRef.current, 'user_yjwbvUwE9uV38jOIolP7w')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setName("")
                setSubject("");
                setEmail("");
                setMessage("");
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
                            <img src={emailIcon} alt="" className="contact-icon" />
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
                        <input type="text" placeholder="Name" name="user_name" onChange={e => setName(e.target.value)}
                            value={name} required />
                        <input type="text" placeholder="Subject" name="user_subject" onChange={e => setSubject(e.target.value)}
                            value={subject} required />
                        <input type="email" placeholder="Email" name="user_email"
                            onChange={e => setEmail(e.target.value)}
                            value={email} required />
                        <textarea rows='5' placeholder="Message" name="message"
                            onChange={event => setMessage(event.target.value)}
                            value={message} required />


                        <button className="btn btn-success w-25 " id="liveToastBtn" onClick={() => setShow(true)}>Send <i class="fa-solid fa-paper-plane ms-2"></i></button>


                        {done &&
                            <ToastContainer className="p-3" position={position}>
                                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide >
                                    <Toast.Header closeButton={false}>

                                        <strong className="me-auto">Message Received</strong>
                                        <small>1 min ago</small>
                                    </Toast.Header>
                                    <Toast.Body >Thank you for your message!</Toast.Body>
                                </Toast>
                            </ToastContainer>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;