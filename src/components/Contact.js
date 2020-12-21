import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form>
                    <div class="form-group">
                        <label for="formGroupName">Name</label>
                        <input type="text" class="form-control" id="formGroupName" placeholder="Your name" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="formGroupMessage">Message</label>
                        <textarea type="text" class="form-control" id="formGroupMessage" placeholder="Write your message..." required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
