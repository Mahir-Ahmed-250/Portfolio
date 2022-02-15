import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import './SingleProject.css'

const SingleProject = () => {
    const { id } = useParams();
    const [projectDetails, setProjectDetails] = useState([]);
    const [singleProject, setSingleProject] = useState({});
    const ID = parseInt(id)
    useEffect(() => {
        fetch('https://mahir-ahmed-250.github.io/API-Portfolio/data.json')
            .then((res) => res.json())
            .then((data) => setProjectDetails(data));
    }, [])

    useEffect(() => {
        const foundService = projectDetails.find((service) => service.id === ID)
        setSingleProject(foundService)
    }, [ID, projectDetails])

    return (
        <div className='container details-project'  >
            <div className='row details-img ' >
                <div className='col-lg-4 img1 '>
                    <Card className='card animate__animated animate__fadeInLeft h-100 ' >
                        <Card.Img style={{ width: '100%' }} variant="top" src={singleProject?.img} />
                    </Card>
                </div>
                <div className='col-lg-4 img2 '>
                    <Card className='card animate__animated animate__fadeInDown h-100 ' >
                        <Card.Img style={{ width: '100%' }} variant="top" src={singleProject?.img2} />
                    </Card>
                </div>
                <div className='col-lg-4 '>
                    <Card className='card animate__animated animate__fadeInRight h-100 img3' >
                        <Card.Img style={{ width: '100%' }} variant="top" src={singleProject?.img3} />
                    </Card>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mt-5">
                            <a href={singleProject?.github1} target='_blank' rel="noreferrer">
                                <Button className="btn btn-success ms-2"> Client Code</Button>
                            </a>
                            <a href={singleProject?.github2} target='_blank' rel="noreferrer">
                                <Button className="btn btn-success ms-2"> Server Code</Button>
                            </a>
                            <a href={singleProject?.link} target='_blank' rel="noreferrer">
                                <Button className="btn btn-success ms-2"> Live Site</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center project-name mt-5">Project Name: {singleProject?.name}</h2>
            <p className="project-description mt-5"> {singleProject?.description}</p>
        </div>
    );
};

export default SingleProject;
