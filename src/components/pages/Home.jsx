import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../store/slices/products.slice";

const Home = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.products);


    useEffect(() =>{
        dispatch(getProductsThunk());
    },[])

    console.log(productList);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <Row xs={1} md={4} className="g-4">
          {productList.map((products) => (
            <Col key={products.id}>
              {/* <Col key={products.id} onClick={() => navigate(`/products/${products.id}`)}> */}

              <Card style={{ width: "20rem" }}>
                <Card.Img variant="center" src={products.images[0].url} />
                <Card.Body>
                  <Card.Title>{products.brand}</Card.Title>
                  <Card.Title>{products.title}</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Title>Precio</Card.Title>
                  <Card.Title>{products.price}</Card.Title> 
                  <Button variant="primary" className="rounded-circle">Add</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </ul>
    </div>
  );
};

export default Home;
