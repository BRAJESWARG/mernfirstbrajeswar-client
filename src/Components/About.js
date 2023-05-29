import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const response = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });
      const data = await response.json();
      console.log(data);
      setUserData(data);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate('/signin');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className='profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src='https://media.licdn.com/dms/image/D5603AQFveOevdjB3Pw/profile-displayphoto-shrink_800_800/0/1682178409057?e=2147483647&v=beta&t=Eb_3c1T4djljF1mfLwehJwlZ7hTa_EDTKCPf0NuriJI' alt='Brajeswar Ghosh' width='50%' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKINGS: <span> 1/10</span>
                </p>

                <ul class="nav nav-tabs" role='tablist'>
                  <li class="nav-item">
                    <a class="nav-link active" id='home-tab' data-toggle="tab" role="tab" href="#home">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" id='profile-tab' data-toggle="tab" role="tab" href="#profile">Timeline</a>
                  </li>
                </ul>

              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' className='profile-edit-btn' name='btnAddMore' value='Edit Profile' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-info'>
                <p>WORK LINK</p>
                <a href='https://github.com/brajeswar-ghosh' target='_blank' rel="noopener noreferrer" >GitHub</a>
                <br />
                <a href='https://brajeswarghosh-myportfolio.netlify.app/' target='_blank' rel="noopener noreferrer" >My Portfolio</a>
                <br />
                <a href='https://github.com/brajeswar-ghosh' target='_blank' rel="noopener noreferrer" >GitHub</a>
                <br />
                <a href='https://brajeswarghosh-myportfolio.netlify.app/' target='_blank' rel="noopener noreferrer" >My Portfolio</a>
                <br />
                <a href='https://github.com/brajeswar-ghosh' target='_blank' rel="noopener noreferrer" >GitHub</a>
                <br />
                <a href='https://brajeswarghosh-myportfolio.netlify.app/' target='_blank' rel="noopener noreferrer" >My Portfolio</a>
                <br />
              </div>
            </div>
            <div className='col-md-8 pl-5 about-info' >
              <div className='tab-content profile-tab' id='myTabContent'>
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className='row'>
                    <div className='col-md-6'>
                      <label htmlFor='User Id' >User Id</label>
                    </div>
                    <div className='col-md-6'>
                      <p id='User Id'> 1234 5678 9123 </p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label htmlFor='name' >Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p id='name'> {userData.name} </p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label htmlFor='email' >Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p id='name'> {userData.email} </p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label htmlFor='phone' >Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p id='name'> {userData.phone} </p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label htmlFor='Profession' >Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p id='name'> {userData.work} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default About