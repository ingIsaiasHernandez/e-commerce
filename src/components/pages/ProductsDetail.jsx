import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  console.log(product);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <p>{product.title}</p>

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.images?.[0]?.url}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.images?.[1]?.url}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.images?.[2]?.url}
            alt="First slide"
          />
        </Carousel.Item>
        
      </Carousel>

      <h3>{product.brand}</h3>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price</h3>
      <h3>{product.price}</h3>
    
    <Button>-</Button>
    {/* <h3>{counter}</h3> */}
    <Button>+</Button>

    <Button>Add to car</Button>


    </div>
  );
};

export default ProductsDetail;
