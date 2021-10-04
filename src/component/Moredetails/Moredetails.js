import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import More from '../More/More';

const Moredetails = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./driving.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>

            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <More key={service.fee} service={service}></More>)
                }
            </Row>
        </div>
    );
};

export default Moredetails;