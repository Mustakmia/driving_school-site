import React from 'react';
import { Card } from 'react-bootstrap';
const More = (props) => {
    const { img, item, fee, time, description } = props.service
    return (
        <div>

            {
                <Card style={{ margin: '3px' }}>
                    <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
                    <Card.Body className="bg-dark">
                        <Card.Title className="text-info">{item} Driving</Card.Title>
                        <Card.Text className="text-warning">Course Time: {time}</Card.Text>
                        <Card.Text className="text-light">Course Fee:{fee} Taka</Card.Text>
                        <Card.Text className="text-primary"> <span className="text-light">Course details :</span>{description} Taka</Card.Text>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};

export default More;