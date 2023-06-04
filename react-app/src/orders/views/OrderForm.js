import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { FormInputCard } from "../components/FormInputCard";
import { FormTitleCard } from "../components/FormTitleCard";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../store/orders";

const initialForm = {
  company: "",
  email: "",
};

const newClientAction = (formValues, action) => {
  action();
};
const recurrentClientAction = (formValues, action) => {
  action();
};

export const OrderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { company, email } = formValues;
  const [clientType, setClientType] = useState("recurrent-client");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (clientType === "new-client") {
      newClientAction(formValues, () => history.push("new-client"));
      return;
    }
    recurrentClientAction(formValues, () => history.push("select-product"));
    dispatch(setCustomer(formValues));
    reset();
  };
  return (
   <div className="mt-5  d-flex justify-content-center align-items-center">
      {/* <Form  className="rounded p-4 p-sm-3">  */}
    <div className="mt-5 d-flex justify-content-center ">
      <Row>
        <Col />
<<<<<<< HEAD
        <Col sm={12}>
        <h1 className='border-bottom px-4'>Order Request Form</h1>
          <Form onSubmit={handleSubmit}>
           
            <FormInputCard inputLabel='E-mail'>
=======
        <Col xs={12}>
      
        <h1 className='border-bottom px-4 mb-3'>Order Request Form</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Email'>
>>>>>>> 9457272 (add customer page)
              <Form.Control
                className='custom-input'
                type='email'
                placeholder='Enter email'
                value={email}
                name='email'
                onChange={handleInputChange}
              />
            </FormInputCard>
            
            <FormInputCard inputLabel='Company'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your Answer'
                value={company}
                name='company'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Is this your first order on our new platform?'>
              <div className='d-flex d-flex justify-content-evenly'>
                <Button
                  type='submit'
                  variant='dark'
                  size='lg'
                  onClick={() => setClientType("new-client")}
                >
                  Yes, take me to add my
                  <br /> contact details
                </Button>
                <Button
                  onClick={() => setClientType("recurrent-client")}
                  type='submit'
                  variant='dark'
                  size='lg'
                >
                  No, take me to start
                  <br /> my order
                </Button>
              </div>
            </FormInputCard>
          </Form>
        </Col>
        <Col />
      </Row>
    </div>
   
   </div>
  );
};
