import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthTypes } from '../Redux/action_types/auth_types';
import { DashboardTypes } from '../Redux/action_types/dashboard_types';
import { Button, Modal, Form } from 'react-bootstrap';
import '../Styles/style.css'
import ModalforAdd from './Modal/modalforadd';
import ModalforEdit from './Modal/modalforedit';


const Dashboard = (props) => {



  const dashboardReduxData = useSelector((state) => state.Dashboard);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const Logout = () => {

    dispatch({
      type: AuthTypes.LOGOUT_REQUEST,
      callback: () => {
        navigate("/login");
      }
    })

  }
  const getUserData = () => {
    dispatch({
      type: DashboardTypes.USER_DATA_REQUEST,
    })

  }
  const HandleDelete = (user) => {
    const newuserlist = list.filter((list) => list.id !== user.id)
    dispatch({
      type: DashboardTypes.DELETE_SUCCESS,
      data: newuserlist,
    })

  }
  useEffect(() => {
    getUserData()
  }, [])




  console.log(dashboardReduxData.UserDataRequests)
  const list = dashboardReduxData.UserDataRequests;

  return (
    <div className='flx container'>
      <h2> Dashboard</h2>
      <ModalforAdd />

      <div className='innerdiv'>

        <table className="table table-striped">
          <thead className="thead-dark text-center">
            <tr>
              <th>First  Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {

              list && list.map((data, index) => {
                return (

                  <tr key={index} >
                    <td onClick={() => navigate(`/dashboard/${data.id}`)}>{data.first_name}</td>
                    <td onClick={() => navigate(`/dashboard/${data.id}`)}>{data.last_name}</td>
                    <td onClick={() => navigate(`/dashboard/${data.id}`)}>{data.email}</td>

                    <td><ModalforEdit /></td>
                    <td> <Button className='btn btn-danger m-2' onClick={() => HandleDelete(data)}>Delete</Button></td>


                  </tr>
                );
              }
              )
            }
          </tbody>

        </table>



      </div>
      <div className="text-center ">
        <button className='btn btn-success' onClick={Logout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard;