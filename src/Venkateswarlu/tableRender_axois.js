import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import Axios from "axios"


const TableAxios = () => {
    const [state, setstate] = useState({
        userData: []
    })

    useEffect(
        () => {
            Axios.get("https://reqres.in/api/unknown").
                then((response) => setstate({ ...state, userData: response.data.data }))
        }, []
    )
    return (
        <>

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>pantone_value</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.userData.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.name}</td>
                                    <td>{each.year}</td>
                                    <td>{each.color}</td>
                                    <td>{each.pantone_value}</td>
                                </tr>
                            )

                        })

                    }
                </tbody>
            </Table>
        </>
    )

}
export default TableAxios