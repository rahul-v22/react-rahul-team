import React from 'react'
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios'

const Usersdata = () => {

  const [state, setState] = useState([])


  // Axios using promises
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(function (response) {
  //       console.log(response.data);
  //       setState(response.data)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  // }, [])


  // Axios using async and await
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        setState(response.data)
      }
      catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])


  // Fetch using promises
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     // .then((json) => console.log(json));
  //     .then((json) => setState(json));  

  // }, [])



  // Fetch using async and await
  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const data = await response.json();
  //       console.log(data);
  //       setState(data)

  //     }
  //     catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUser()
  // }, [])

  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOflast = currentpage * postsPerPage;
  const indexoffirst = indexOflast - postsPerPage;
  const currentstate = state.slice(indexoffirst, indexOflast)

  var pageNumbers = []
  for (let i = 1; i <= Math.ceil((state.length) / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  const handleButton = (user) => {
    setCurrentPage(user)
  }

  return (

    <div className='container'>

      <div className='d-flex flex-row justify-content-end m-3'>

        <select onChange={(e) => {
          setCurrentPage(1);
          setPostsPerPage(e.target.value);
        }}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <Table className='text-center' bordered striped hover>
        <thead>
          <tr>
            <th> ID </th>
            <th> TITLE </th>
          </tr>
        </thead>
        <tbody className="text-center">

          {
            currentstate.map((user, index) => {
              return (

                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      {
        pageNumbers.map((user, index) => {
          return (
            <button className="mt-1" key={index} onClick={() => handleButton(user)}
              style={{
                width: '40px',
                height: '40px',
                border: '0px',
                margin: '3px',
              }}>
              {user}</button>
          )
        })
      }
    </div>
  )
}

export default Usersdata;