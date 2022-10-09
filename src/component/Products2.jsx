import {useState, useEffect} from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted){
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
          console.log(filter)
        }

        return () => {
          componentMounted = false;
        }

      }
      getProducts();
    }, []);

      const Loading = () =>  {
        return(
         <>
          <div className="col md-3">
            <Skeleton height={350}/>
          </div>
          <div className="col md-3">
            <Skeleton height={350}/>
          </div>
          <div className="col md-3">
            <Skeleton height={350}/>
          </div>
          <div className="col md-3">
            <Skeleton height={350}/>
          </div>
         </>
        );
      }
  

     const filterProduct = (cat) =>{
      const updatedList= data.filter((x)=> x.category === cat);
      setFilter(updatedList);
     }
  const ShowProducts = () => {
    return(
      <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <Button className="btn  me-2" variant="outline-dark" onClick={()=>setFilter(data)}>All</Button>
        <Button className="btn  me-2" variant="outline-dark" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</Button>
        <Button className="btn  me-2" variant="outline-dark" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</Button>
        <Button className="btn  me-2" variant="outline-dark" onClick={()=>filterProduct("jewelery")}>Jewelery</Button>
        <Button className="btn  me-2" variant="outline-dark" onClick={()=>filterProduct("electronics")}>Electronics</Button>
      </div>
      {filter.map((product) => {
        return(
            <Card style={{ width: '18rem' }} className="h-100 text-center p-4 m-4">
           <Card.Img variant="top" src={product.image} alt={product.title} height="250px" />
          <Card.Body>
          <Card.Title className="card-title mb-0">{product.title.substring(0,12)}...</Card.Title>
          <Card.Text className="card-text lead fw-bold">${product.price}</Card.Text>
          <NavLink to={`/products/${product.id}`} className="btn nav-link"><Button variant="outline-dark">Buy Now</Button></NavLink>
          </Card.Body>
          </Card>
          
        );
      })}
      </>
    );
  }

  return (

    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
      
    </div>
  );
};


export default Products;