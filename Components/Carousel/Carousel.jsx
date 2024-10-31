import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import carArray from "/Users/nduracak/P1/public/Array.js"
import { useState, useEffect } from 'react'
import "./Carousel.css"

export default function carousel() {
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

      return(
        <div className='carousel'>
      <Carousel fade>
        <Carousel.Item>
        <div>
      <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={""} />
            {card}
            <Card.Body>
              <Card.Title>{names}</Card.Title>
              <Card.Text>
               {inf}
               <br />
               <button className='But1'>Inspect</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
          <Carousel.Caption className="fc1">
{/* */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div>
      <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={""} />
            {card}
            <Card.Body>
              <Card.Title>{names}</Card.Title>
              <Card.Text>
                {inf}
                <br />
                <button className='But2'>Inspect</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
          <Carousel.Caption className='fc2'>
 {/* */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
      <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={""} />
            {card}
            <Card.Body>
              <Card.Title>{names}</Card.Title>
              <Card.Text>
              {inf}
              <br />
              <button className='But3'>Inspect</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
          <Carousel.Caption className='fc3'>
{/* */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      )
  }
  