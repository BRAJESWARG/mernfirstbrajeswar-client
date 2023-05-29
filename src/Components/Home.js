import React, { useEffect, useState } from 'react'

const Home = () => {

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const UserHomePage = async () => {
        try {
            const response = await fetch('/getData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        UserHomePage();
    }, []);

    return (
        <>
            <div className='home-page'>
                <div className='home-div'>
                    <p className='pt-5'>WeELCOME</p>
                    <h1>{userName}</h1>
                    <h1>{show ? 'Happy, to see you' : 'Welcome Brajeswar\'s world'}</h1>
                </div>
            </div>
        </>
    )
}

export default Home;