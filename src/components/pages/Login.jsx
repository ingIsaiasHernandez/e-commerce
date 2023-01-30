import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInputName } from "../../store/slices/inputName.slice";

const Login = () => {

    const dispatch = useDispatch();

    const [ inputvalue, setInputValue] = useState("");

    const navigate = useNavigate();


    const clickButton = () => {
        dispatch(setInputName(inputvalue));
        navigate('/')
    }
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Welcome! Enter your email and password to continue{" "}
        </Form.Text>
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        value={inputvalue}
        onChange={e => dispatch(setInputValue(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={clickButton}>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
