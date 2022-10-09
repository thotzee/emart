import React from 'react'
import '../assets/bg.jpg';
import Products2 from './Products2';

const Home = () => {
  return (
    <div className="hero">
    <div className="card text-bg-dark border-0 ">
     <img src={require('../assets/bg.jpg')} className="card-img" alt="Background" height="750px" />
     <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
      <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
     <p className="card-text lead fs-2">Check out all autumn trends</p>
     </div>
     </div>
     </div>
     <Products2/>   
    </div>
  );
}

export default Home;