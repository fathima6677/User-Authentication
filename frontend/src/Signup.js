// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import Validation from "./SignUpValidation";

// function Signup() {
//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formErrors = Validation(values); // Validate the form
//         setErrors(formErrors); // Set the errors state

//         // Check if there are no errors before proceeding
//         if (Object.values(formErrors).every(error => error === '')) {
//             fetch('http://localhost:3000/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(values)
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//         }
//     };

//     return (
//         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//             <div className='bg-white p-3 rounded w-25'>
//                 <h2>Sign-Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="name"><strong>Name</strong></label>
//                         <input type="text" placeholder='Enter Name' name="name"
//                             value={values.name} onChange={handleInput} className='form-control rounded-0' />
//                         {errors.name && <span className='text-danger'> {errors.name}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="email"><strong>Email</strong></label>
//                         <input type="text" placeholder='Enter Email' name="email"
//                             value={values.email} onChange={handleInput} className='form-control rounded-0' />
//                         {errors.email && <span className='text-danger'> {errors.email}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder='Enter password' name="password"
//                             value={values.password} onChange={handleInput} className='form-control rounded-0' />
//                         {errors.password && <span className='text-danger'> {errors.password}</span>}
//                     </div>
//                     <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
//                     <p>You agree to our terms and policies</p>
//                     <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./SignUpValidation";

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit")
        const formErrors = Validation(values); 
        setErrors(formErrors);

        if (Object.values(formErrors).every(error => error === '')) {
            fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                navigate('/');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name="name"
                            value={values.name} onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="text" placeholder='Enter Email' name="email"
                            value={values.email} onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter password' name="password"
                            value={values.password} onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;

