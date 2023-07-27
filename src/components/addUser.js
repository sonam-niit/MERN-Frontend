import axios from "axios";
import React, { useState } from "react";

export function AddUser() {

    const [user,setUser]=useState({name:'',email:'',username:'',password:''});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        //console.log(user);
        const resp= await axios.post('http://localhost:5000/api/users',user);
        // const resp=await fetch("http://localhost:5000/api/users",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(user)
        // })
        // const data=await resp.json();
        console.log(resp.data);
        alert("User Registered Successfully")
        setUser({name:'',email:'',username:'',password:''});

    }
    return (
        <div className="row">
            <h1>Add User</h1>
            <div className="col-md-6 offset-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" 
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                    placeholder="John Doe"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" 
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    placeholder="john.doe@gmail.com"/>
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" 
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    placeholder="johndoe01"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    placeholder="*************"/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            </div>
        </div>
    )

}