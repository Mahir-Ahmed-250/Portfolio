import React from 'react';
import img1 from '../../../Img/about.gif'
import './AboutMe.css'
import { faFacebook, faGithub, faGoogleDrive, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AboutMe = () => {
    const fb = <FontAwesomeIcon icon={faFacebook} />
    const git = <FontAwesomeIcon icon={faGithub} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const watch = <FontAwesomeIcon icon={faGoogleDrive} />
    return (
        <div id="about" className="container top-banner about mt-5">
            <div className="row">
                <div className='col-md-6 animate__animated animate__fadeInLeft'>
                    <img src={img1} className='about-img' alt="" />
                </div>
                <div className="col-md-6 mt-5 banner-title animate__animated animate__fadeInRight">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-description">
                        I complete my graduation in Mathematics, right now i am focusing on Web development and learning new technology's.
                        <br /><br />
                        <span className="tools">♦ Comfortable with:</span>  HTML5, CSS3, Bootstrap5, Javascript, React, React Bootstrap.
                        <br />
                        <span className="tools">♦ Familiar with:</span> Node, Express, MongoDB, Material-UI, Tailwind.<br />
                        <span className="tools">♦ Tools:</span> Vs Code, Git, Firebase, Netlify, Heroku, Adobe Photoshop, Adode Premier Pro.<br /><br />
                        <a href="https://github.com/Mahir-Ahmed-250" target='_blank' rel="noreferrer"
                        ><button className='btn btn-outline-success me-3 git-btn'>
                                <span style={{ color: '#171515', fontSize: '18px', marginRight: '5px' }}>{git}</span>
                                Github</button></a>
                        <a href="https://www.facebook.com/Xahin.Mahir/" target='_blank' rel="noreferrer"
                        ><button className='btn btn-outline-success me-3 fb-btn'>
                                <span style={{ color: '#3b5998', fontSize: '18px' }}>{fb}</span> Facebook</button></a>
                        <a href="https://www.linkedin.com/in/mahir-ahmed-a15547220/" target='_blank' rel="noreferrer"
                        ><button className='btn btn-outline-success me-3 link-btn'>
                                <span style={{ color: '#0072b1', fontSize: '18px', marginRight: '5px' }}>{linkedin}</span>
                                Linkedin</button></a>
                        <a href="https://drive.google.com/drive/folders/1B4Q9uA-4R42Mfix1qR3eV7g8y9BRVNGF?usp=sharing" target='_blank' rel="noreferrer"
                        ><button className='btn btn-outline-success edit-btn '>
                                <span style={{ color: 'green', fontSize: '18px', marginRight: '5px' }}>{watch}</span>
                                Watch My Edited Videos</button></a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;