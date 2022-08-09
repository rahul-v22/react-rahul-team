import React from 'react'
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios'

const Usersdata = () => {

  const [state, setState] = useState({
    data: []
  })
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(function (response) {
        console.log(response.data);
        setState(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


  }, [])

  return (

    <div className='container text-center'>
      <Table >
        <thead>
          <tr>
            <th> ID </th>
            <th> EMAIL </th>
            <th> FIRSTNAME </th>
            <th> LASTNAME </th>
            <th> AVATAR </th>
          </tr>
        </thead>
        <tbody className="text-center">

          {
            state.data.map((user, index) => {
              return (

                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td><img src={user.avatar} height="50" width="50" /></td>

                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Usersdata;