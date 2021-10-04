import React from 'react';
import { Card } from 'react-bootstrap';

const More = (props) => {
    const { img, item, fee, time, description } = props.service
    return (
        <div>
            {
                <Card style={{ margin: '3px' }}>
                    <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{item}</Card.Title>
                        <Card.Text>Course Time: {time}</Card.Text>
                        <Card.Text>Course Fee:{fee} Taka</Card.Text>
                        <Card.Text>Course details:{description} Taka</Card.Text>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};

export default More;