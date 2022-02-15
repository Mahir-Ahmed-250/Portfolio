import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import TopBanner from '../TopBanner/TopBanner';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;