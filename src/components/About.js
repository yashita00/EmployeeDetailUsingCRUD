import React from "react";
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div className="container py-4">
            <div class="card w-50">
                <h3 class="card-header">
                    About Employee Book
                </h3>
                <div class="card-body">
                    <h5 class="card-title">Implementing CRUD Operation.</h5>
                    <p class="card-text">In this React Website, I Create a Employee details website in which we can implement all the crud operation. </p>
                    <Link className="btn btn-primary btn-lg mt-4" to="/">
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
