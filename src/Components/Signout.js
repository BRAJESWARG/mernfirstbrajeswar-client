import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Signout = () => {
    const { state, dispatch } = useContext(UserContext);
    console.log(state);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/signout', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
            .then(res => {
                dispatch({
                    type: 'USER',
                    payload: false
                })
                navigate('/signin', { replace: true });

                if (res.status !== 200) {
                    navigate('/signin')
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>Signout</div>
    )
}

export default Signout