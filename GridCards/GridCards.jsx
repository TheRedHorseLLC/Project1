import "./GridCards.css"
import carArray from "/Users/nduracak/P1/public/Array.js"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";

  export default function GridCards() {
  const [cars,setCars] = useState(carArray.data.cari)
  
  useEffect(()=>{
    setCars(cars)
  }, [cars])


  const im = cars.map((it)=>{ return <div key={it.id}> <img className="imgs" src={it.image}/></div> })
  const random = Math.floor(Math.random() * im.length)
  const card = im[random]
  const hi = cars.map((a) =>{ return <p key={a.id}> {a.name}</p>} )
  const names = hi[random]
  const int = cars.map((b)=>{return <span key={b.id}> {b.info}</span>})
  const inf = int[random]
  console.log(card)
  
return (
    <Row xs={1} md={1} className="g4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            {card}
            <Card.Body>
              <Card.Title>{names}</Card.Title>
              <Card.Text>
                {inf}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}