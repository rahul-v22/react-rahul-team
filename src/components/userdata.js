import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";


const Userdata = () => {

    const [data, setData] = useState({
        data:[]
    })

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                // handle success
                console.log("s", response.data);
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])

    return (
        <div className="container" >
            <Table table striped hover>
                <thead>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name </th>
                    <th>Last Name</th>
                    <th>Avatar </th>
                </thead>
                <tbody>
                    {
                        data.data.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <td>{users.id}</td>
                                    <td>{users.email}</td>
                                    <td>{users.first_name}</td>
                                    <td>{users.last_name}</td>
                                    <td><img src={users.avatar} alt="image" height="60" width="60" /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}
export default Userdata;