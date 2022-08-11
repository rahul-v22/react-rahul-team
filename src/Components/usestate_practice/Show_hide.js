import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Show_hide = () => {

    const [state, setState] = useState({
        Text: false,
    });
    const { Text } = state
    const handleShow = () => {
        setState({ Text: true })
    }
    const handleHide = () => {
        setState({ Text: false })

    }
    return (
        <div className="container mt-3">
            <h3> show & hide </h3>
            <div>
                {
                    Text ? <Button className='btn btn-success mt-2' onClick={handleHide}>Hide</Button> :
                        <Button className='btn btn-success mt-2' onClick={handleShow}>Show</Button>
                }
                {
                    Text ? <h6 className='mt-3'>Displaying Text</h6> : ""
                }

            </div>
        </div>
    )
}

export default Show_hide;


