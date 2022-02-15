import React, { useEffect, useState } from 'react';
import MyProject from '../MyProject/MyProject';
import './MyProjects.css'

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id="projects" className="container mt-5 h-100">
            <div className="projects-texts text-center">
                <h1 className="projects-texts-title">
                    My Projects
                </h1>
                <p className="projects-texts-description">
                    Here Some of my Projects
                </p>
            </div>
            <div className="row mt-3 animate__animated animate__fadeInLeft ">
                {
                    projects.map(project => <MyProject key={project.id} project={project}></MyProject>)
                }

            </div>
        </div>
    );
};

export default MyProjects;