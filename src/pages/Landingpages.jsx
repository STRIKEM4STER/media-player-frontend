import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpages() {
  return (
    <>
    
    <Container className='mt-5' >
      <Row>
        <Col sm={12} md={6}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nisi ad consequuntur facere cumque distinctio harum quae? Quis aut soluta, maxime, numquam quam fuga velit corrupti porro praesentium a qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci aliquid atque maiores temporibus nisi voluptatem soluta odit nostrum hic necessitatibus facilis minima asperiores, rem quas dignissimos repudiandae distinctio ab.</p>
        <Link to={"/home"}><button className='btn btn-warning mt-5' > Get started </button></Link>
        </Col>

        <Col sm={12} md={6} className='d-flex justify-content-center' >
          <img src="https://static.vecteezy.com/system/resources/thumbnails/029/573/477/small_2x/headphones-for-listening-to-music-and-enjoying-the-bass-and-beats-bright-arc-headphones-free-photo.jpg" alt="no-img" className='w-75' />
        </Col>
      </Row>
      <Row>
        <h3 className='text-center my-5 '>Features</h3>
        
        
        
        <Col md={4} >
            <Card style={{ width: '100%' }} className='p-3' >
              <Card.Img variant="top" src="https://media.tenor.com/9txCGkE71yAAAAAM/disco-bar-line.gif" height={"300px"} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
        </Col>

        <Col md={4} className='mt-4 mt-md-0' >
        <Card style={{ width: '100%' }} className='p-3' >
              <Card.Img variant="top" src="https://media.tenor.com/9txCGkE71yAAAAAM/disco-bar-line.gif" height={"300px"} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
        </Col>

        <Col md={4} className='mt-4 mt-md-0' >
        <Card style={{ width: '100%' }} className='p-3' >
              <Card.Img variant="top" src="https://media.tenor.com/9txCGkE71yAAAAAM/disco-bar-line.gif" height={"300px"} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
        </Col>

        
      </Row>

      <Row className='mt-5 mx-md-0 m-3'>

      <Col md={"12"} className='border border-warning rounded p-5 ' >
      
      <Row>
        <Col md={"6"} sm={"12"} >
        <h3 className='text-warning' >Simple Fast And Powerful</h3>
        <p><span className='fs-4' >Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque odio ullam totam molestias eligendi repudiandae tenetur! Optio quam corporis impedit molestias perspiciatis magnam enim id, amet omnis voluptatem culpa distinctio.</p>
        <p><span className='fs-4' >Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque odio ullam totam molestias eligendi repudiandae tenetur! Optio quam corporis impedit molestias perspiciatis magnam enim id, amet omnis voluptatem culpa distinctio.</p>
        <p><span className='fs-4' >Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque odio ullam totam molestias eligendi repudiandae tenetur! Optio quam corporis impedit molestias perspiciatis magnam enim id, amet omnis voluptatem culpa distinctio.</p>
        </Col>
  
        <Col md={"6"} sm={"12"}>
        <div className='d-flex justify-content-center align-items-center h-100' ><iframe width="100%" height="450px" src="https://www.youtube.com/embed/5WsUIeNAtbM" title="Manasilaayo Video | Vettaiyan | Rajinikanth | Anirudh Ravichander | Manju Warrier | T.J. Gnanavel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </Col>
      </Row>

      </Col>

      </Row>

    </Container>

    </>
  )
}

export default Landingpages