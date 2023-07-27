import React, { useState,useEffect } from "react";
import axios from 'axios';

export function GetAll() {

    const [users, setUsers] = useState([]);
    const getAll = async () => {

        try {
            const resp= await axios.get('http://localhost:5000/api/users');
            // const resp =await fetch('http://localhost:5000/api/users');
            // const data = await resp.json();
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error)
        }

    }
    const deleteUser =async (id) => {
        try {
            const resp= await axios.delete('http://localhost:5000/api/users/'+id);
            console.log(resp.data);
            getAll();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getAll();
    },[]);

    return (
        <div className="container">
            <h1>User List</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-danger" onClick={()=>{deleteUser(item._id)}}>X</button></td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}