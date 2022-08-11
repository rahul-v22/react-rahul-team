import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Timer = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(true);
    const [time, setTime] = useState('')

    let timer;

    useEffect(() => {
        if (state) {
            timerFunc();
        }
        return () => {
            clearInterval(timer);
        }
    }, [state]);
    const timerFunc = () => {
        timer = setInterval(() => {
            const data = new Date().toLocaleTimeString()
            setTime(data)
        }, 1000);
    }

    const buttonClick = () => {
        setState(false)
    }

    const buttonNavigate = () => {
        setState(false)
        alert("do you want to navigate to other page");
        navigate('/show_hide')
    }

    return (
        <div className='container mt-3 w-25'>
            <div className='card text-center'>
                <div className='card-header'>
                    <p className='h4'> Timer </p>
                </div>
                <div>
                    <h3> {time} </h3>
                </div>
            </div>
            <div className='text-center mt-3'>
                <Button className='btn btn-success m-2' onClick={buttonClick}> stop </Button>
                <Button className='btn btn-success' onClick={buttonNavigate}> navigate</Button>
            </div>
        </div>

    )
}

export default Timer;