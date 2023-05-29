import React, { useEffect, useState } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({name: '', email: '', phone: '',subject: '', message: ''});

  const UserContact = async () => {
    try {
      const response = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json({});
      console.log(data);
      setUserData({...userData, name:data.name, email:data.email, phone: data.phone});
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    UserContact();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData({...userData, [name]:value });
  }

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = userData;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, subject, message})
    });
    const data = await res.json();
    if(!data) {
      console.log("Message not send");
    }
    else {
      alert('Message Sent');
      setUserData({...userData, message: "", subject: ""});
      }
  }

  return (
    <>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h1 class="mb-3">Get in Touch </h1>
            <form method='POST'>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name="name" value={userData.name} onChange={handleInput} required />
                </div>
                <div class="col-md-6">
                  <label for="phone-number" class="form-label">Phone Number</label>
                  <input type="number" class="form-control" id="phone-number" name="phone-number" value={userData.phone} onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">Email ID</label>
                  <input type="email" class="form-control" id="email" name="email" value={userData.email} onChange={handleInput} required />
                </div>
                <div class="col-md-6">
                  <label for="subject" class="form-label">Subject</label>
                  <input type="text" class="form-control" id="subject" name="subject" value={userData.subject} onChange={handleInput} />
                </div>
                <div class="col-12">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" name="message" rows="5" value={userData.message} onChange={handleInput} required></textarea>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-6">
                      <button type="submit" class="btn btn-dark w-100 fw-bold" onClick={contactForm} >Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact