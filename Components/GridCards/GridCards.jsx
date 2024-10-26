import "./GridCards.css"
import carArray from "/Users/nduracak/P1/public/Array.js"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";

  export default function GridCards() {
  const [cars,setCars] = useState([])

  useEffect(()=>{
      setCars(carArray)
  },[])

  //let random = cars.map((car)=><li key={car.id}>{car.image}</li>)
  let images = Math.floor(Math.random()*cars.length)

  return (
    <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={images} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}