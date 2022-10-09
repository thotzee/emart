import React from 'react'
import '../assets/bg.jpg';
import Products2 from './Products2';
import Card from 'react-bootstrap/Card';

const Home2 = () => {
  return (
<div>
<Card className="text-bg-dark border-0">
<Card.Img src={require('../assets/bg.jpg')} className="card-img" alt="Background" height="750px"  />
<Card.ImgOverlay className="d-flex flex-column justify-content-center container">
  <Card.Title className="display-3 fw-bolder mb-0">New Season Arrivals</Card.Title>
  <Card.Text className="card-text lead fs-2">Check out all autumn trends</Card.Text>
</Card.ImgOverlay>
</Card>
<Products2/>
</div>

  );
}

export default Home2;