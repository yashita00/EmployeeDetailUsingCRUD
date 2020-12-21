import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const AddUser = () => {
    let history = useHistory(); 
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        console.log(e.target.value);
        setUser({...user,[e.target.name] : e.target.value})
    }
    const onSubmit = async e =>
    {
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        history.push('/');
    }
    return (
        <div className="container py-4">
            <div className="card w-75 mx-auto shadow p-5">
                <h2 className="card-header text-center mb-4"> Add Employee </h2>
                <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your User Name"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Email Address"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Phone Number"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Website Name"
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block"> Add Employee </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser;