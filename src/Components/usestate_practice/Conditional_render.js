import React from 'react'
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';

const Conditional_render = () => {

    const [currenttab, setCurrenttab] = useState('please select the tab')

    const buttonClick = () => {
        setCurrenttab("I'm in home tab")
    }

    const buttonClick1 = () => {
        setCurrenttab("I'm in about tab")
    }
    const buttonClick2 = () => {
        setCurrenttab("I'm in contact tab")
    }
    return (
        <div>
            <ul className='d-flex flex-row justify-content-around mt-3 container'>
                <li> <a onClick={buttonClick}>Home</a> </li>
                <li> <a onClick={buttonClick1}>About</a> </li>
                <li> <a onClick={buttonClick2}>Contact Us</a> </li>
            </ul>
            {
                currenttab ? <h3 className='container'> {currenttab} </h3> : null
            }
        </div>
    )
}

export default Conditional_render;