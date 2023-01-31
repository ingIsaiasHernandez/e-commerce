import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setInputName } from "../../store/slices/inputName.slice";

const Login = () => {
  // const dispatch = useDispatch();

  const {register,handleSubmit} = useForm();

  const navigate = useNavigate();

  // const [inputvalue, setInputValue] = useState("");

  // const navigate = useNavigate();

  // const clickButton = () => {
  //   dispatch(setInputName(inputvalue));
  //   navigate("/");
  // };

  const submit = (data) => {
    console.log(data);
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login/',data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate("/")
      })
      .catch(error =>{
        if(error.response.status === 401)
          alert("invalid credentials");
        console.log(error);
      })
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Welcome! Enter your email and password to continue{" "}
        </Form.Text>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        {...register("password")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
