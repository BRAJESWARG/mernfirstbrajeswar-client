import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Signin = () => {

  const {state, dispatch} = useContext(UserContext);
  console.log(state);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (response.status === 422 || !data) {
      window.alert('Invalid Credentials!');
    } else {
      dispatch({
        type: 'USER',
        payload: true
      })
      window.alert('Login Successful!');
      navigate('/');
    }
  }

  return (
    <Container className='Form-Container'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
          <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" width="100%" />
          <NavLink to='/signup' className='NavLink create-an-ccount-text' >Create an Account</NavLink>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
          <Form method='POST' className='register-form' id='register-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='email' >Email address</Form.Label>
              <Form.Control type="email" name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor='password' >Password</Form.Label>
              <Form.Control type="password" name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" id='signin' name='signin' className='form-submit' value="Log In" onClick={loginUser} >
              Sign In
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>
  )
}

export default Signin