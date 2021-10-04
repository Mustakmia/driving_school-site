import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeCart'
const HomeCart = (props) => {
    const history = useHistory()
    const details = () => {
        history.push('/more')
    }
    const { item, img, time, fee } = props.service
    return (

        <div>


            <Col>
                <Card style={{ margin: '3px' }}>
                    <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
                    <Card.Body >
                        <Card.Title>{item}</Card.Title>
                        <Card.Text>Course Time: {time}</Card.Text>
                        <Card.Text>Course Fee:{fee} Taka</Card.Text>
                        <button onClick={details} className=" btn-warning">Details</button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default HomeCart;