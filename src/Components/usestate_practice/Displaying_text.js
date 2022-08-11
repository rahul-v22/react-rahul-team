import React from 'react'
import { useState } from 'react';

const Displaying_text = () => {
    const [state, setState] = useState({
        name: ''
    })
    const handleChange = (e) => {
        setState({...state, [e.target.name] : e.target.value})
    }
    return (
        <div className='container mt-3'>
            <h3>Displaying The Text</h3>
            <div className='mt-3'>
                <label class="label" > TextBox: </label>
                <input type="text" name="name"  onChange={handleChange} className="mb-3" />
            </div>

            <h6>{state.name}</h6>
        </div>
    )
}

export default Displaying_text;