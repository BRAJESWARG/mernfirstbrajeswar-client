import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, work, password, cpassword })
    });
    const data = await response.json();
    if (data.status === 422 || !data) {
      window.alert('Invalid Resistration!');
      console.log('Invalid Resistration!');
    }
    else {
      window.alert('Registration Successful!');
      console.log('Registration Successful!');
      navigate('/signin');
      // history.push('/signin');
      // window.location.href = '/signin';
    }

  }

  return (
    <Container className='Form-Container'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
          <Form method='POST'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='name' >Full Name</Form.Label>
              <Form.Control type="text" name='name' id='name' autoComplete='off' placeholder="Enter Name" value={user.name} onChange={handleInputs} required />
              <Form.Label htmlFor='email' >Email address</Form.Label>
              <Form.Control type="email" name='email' id='email' autoComplete='off' placeholder="Enter Email" value={user.email} onChange={handleInputs} required />
              <Form.Label htmlFor='phone' >Phone Number</Form.Label>
              <Form.Control type="phone" name='phone' id='phone' autoComplete='off' placeholder="Enter Phone Number" value={user.phone} onChange={handleInputs} required />
              <Form.Label htmlFor='work' >Work</Form.Label>
              <Form.Control type="text" name='work' id='work' autoComplete='off' placeholder="Enter Work" value={user.work} onChange={handleInputs} required />
              <Form.Label htmlFor='password' >Password</Form.Label>
              <Form.Control type="password" name='password' id='password' autoComplete='off' placeholder="Password" value={user.password} onChange={handleInputs} required />
              <Form.Label htmlFor='cpassword' >Confirm Password</Form.Label>
              <Form.Control type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit" onClick={PostData} >
              Register
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
          <Image className='img-signup' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" width="100%" />
          <NavLink to='/signin' className='NavLink already-registered-text' >I am already Registered</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;