import React from 'react';
import Typical from "react-typical";
import cv from '../../../cv/Mahir Resume.pdf'
import img1 from './1.jpg'

import './TopBanner.css'
const TopBanner = () => {
    return (
        <div id="home" className="container top-banner">
            <div className="row">
                <div className="col-md-8 mt-5 banner-title animate__animated animate__fadeInLeft">
                    <h2 className="banner-title-1" >Assalamualaikum, I am  </h2>
                    <h1 className="my-name">Mahir Ahmed</h1>
                    <span className="primary-text">
                        <h1 className="my-info">
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Junior Web Developer",
                                    500,
                                    "Student",
                                    500,
                                    "Video Editor",
                                    500,
                                    "Mathematician",
                                    500,
                                    "Volunteer",
                                    500,
                                ]}
                            />
                        </h1>
                    </span>
                    <a href={cv} rel="noreferrer"
                        style={{ textDecoration: "none" }}><button className='btn btn-success resume-btn'>Download Resume</button></a>
                </div>
                <div className='col-md-4 intro-right animate__animated animate__fadeInRight '>
                    <img src={img1} className='my-img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;