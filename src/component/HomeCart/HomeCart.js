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
            <Col className="">
                <Card style={{ margin: '3px' }}>
                    <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
                    <Card.Body className="bg-dark" >
                        <Card.Title className="text-info">{item}       Riding</Card.Title>
                        <Card.Text className="text-info">Course Time: {time}</Card.Text>
                        <Card.Text className="text-info">Course Fee:{fee} Taka</Card.Text>
                        <button onClick={details} className=" btn-warning">Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default HomeCart;