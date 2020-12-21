import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container py-4">
            <h1 className="display-4">User id: {id}</h1>
            <div className="card w-50">
                <h4 className="card-header">
                    Employee Details
               </h4>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                    <li className="list-group-item"><strong>Username:</strong> {user.username}</li>
                    <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                    <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
                    <li className="list-group-item"><strong>Website:</strong> {user.website}</li>
                </ul>
            </div>
            <Link className="btn btn-primary btn-lg mt-4" to="/">
                Back to Home Page
           </Link>
        </div>
    )
}
export default ViewUser;