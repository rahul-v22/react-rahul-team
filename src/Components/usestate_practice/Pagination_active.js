import React from 'react'
import { useState } from 'react';


const Pagination_active = () => {

  const [state, setState] = useState(1);
  const [state1, setState1] = useState(5);

  let arr = [];
  for (let i = 1; i <= state1; i++) {
    arr.push(i);
  }

  const handleChange = (e) => {
    setState(e.target.value);
  }
  return (
    <div className='container'>
      <div className='mt-3 ml-3'>
        <select onChange={handleChange}>
          <option >1</option>
          <option >2</option>
          <option>3</option>
          <option >4</option>
          <option>5</option>
        </select>
      </div>

      <div className='mt-3'>
        {
          arr &&
          arr.map((each) => {
            return (
              <span >
                {
                  state == each ? <button key={each}
                    style={{
                      'background-color': 'black',
                      width: '40px',
                      height: '40px',
                      border: '0px',
                      margin: '3px',
                      color: 'white'
                    }}>{each}</button> : <button key={each}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '0px',
                        margin: '3px',
                      }}>{each}</button>
                }
              </span>
            );
          })
        }
      </div>
    </div>
  )
}
export default Pagination_active;