import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProject = ({ project }) => {
    const { id, img, name } = project;
    return (
        <div id="projects" className="col-md-6 col-lg-4 mt-4">
            <Card className='card home-card' style={{ height: '100%', borderRadius: '20px' }} >
                <p style={{ fontSize: '30px', textAlign: 'center', fontWeight: '800', marginTop: '5px' }}>{name}</p>
                <Card.Body >
                    <Card.Img variant="top" style={{ height: '100%' }} src={img} />

                </Card.Body>
                <Link to={`/project/${id}`}><button className='btn btn-success mt-3 ms-3 mb-3' style={{ borderRadius: '50px' }}>See Details</button></Link>
            </Card>
        </div>
    );
};

export default MyProject;