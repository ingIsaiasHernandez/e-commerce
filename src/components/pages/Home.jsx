import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  InputGroup,
  Row,
  Form,
  Accordion,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterNewProductsThunk,
  filterProductsCategoryThunk,
  getProductsThunk,
} from "../../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);

  const [searchProduct, setSearchProduct] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  console.log(searchProduct);

  return (
    <div>
      <InputGroup className="mb-5" size="md">
        <Form.Control
          placeholder="Search product"
          aria-label="Search products"
          aria-describedby="basic-addon2"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(filterNewProductsThunk(searchProduct.toString()))
          }
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category filter</Accordion.Header>

          {categories.map((category) => (
            <Accordion.Body
              key={category.id}
              onClick={() => dispatch(filterProductsCategoryThunk(category.id))}
            >
              {category.name}
            </Accordion.Body>
          ))}
        </Accordion.Item>
      </Accordion>

      <ul>
        <Row xs={1} md={4} className="g-4">
          {productList.map((products) => (
            <Col key={products.id} onClick={() => navigate(`/product/${products.id}`)}>

              <Card style={{ width: "20rem" }}>
                <Card.Img variant="center" src={products.images[0].url} />
                <Card.Body>
                  <Card.Title>{products.brand}</Card.Title>
                  <Card.Title>{products.title}</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Title>Price</Card.Title>
                  <Card.Title>{products.price}</Card.Title>
                  <Button variant="primary" className="rounded-circle">
                    Add
                  </Button>
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
