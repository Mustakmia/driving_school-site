import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCart from '../HomeCart/HomeCart';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./driving.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const newservices = services.slice(0, 3)
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    newservices.map(service => <HomeCart key={service.fee} service={service}></HomeCart>)
                }
            </Row>
        </div>
    );
};

export default Home;