import React, { Fragment, useState } from 'react'
import { addUserDetails } from '../services/ServiceWorkers';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/signup.svg'

function Register() {
    const initalState = { uname: "", gmail: "", pwd: "", cpwd: "" };
    const [UserDetails, setUserDetails] = useState(initalState);
    const nav = useNavigate();

    const handleEdit = (e) => {
        setUserDetails({ ...UserDetails, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(UserDetails.uname.trim() === "" || UserDetails.gmail.trim() === "" || UserDetails.pwd.trim() === "" || UserDetails.cpwd.trim() === "" || UserDetails.pwd.trim() !== UserDetails.cpwd.trim())) {
            addUserDetails(UserDetails)
                .then((task) => {
                    if (task.status == 200) {
                        alert("Register Successfully");
                        nav('/login');
                    }
                })
                .catch((e) => console.log(e.message));

            setUserDetails(initalState);
        } else {
            if (UserDetails.pwd.trim() !== UserDetails.cpwd.trim()) {
                alert("Pasword Mismatch");
            } else {
                alert('Enter all the fields');
            }
        }
    }

    return (
        <Fragment>
            <section className="app form_page">
                <div className="form_container">
                    <form method='POST' onSubmit={(e) => handleSubmit(e)}>
                        <h1 className="title">Register as</h1>

                        <div className="form_group">
                            <label htmlFor="uname">User Name: </label>
                            <input
                                type="text"
                                name="uname"
                                id="uname"
                                onChange={(e) => handleEdit(e)}
                                value={UserDetails.uname}
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="gmail">E-mail: </label>
                            <input
                                type="email"
                                name="gmail"
                                id="gmail"
                                onChange={(e) => handleEdit(e)}
                                value={UserDetails.gmail}
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="pwd">Password: </label>
                            <input
                                type="password"
                                name="pwd"
                                id="pwd"
                                onChange={(e) => handleEdit(e)}
                                value={UserDetails.pwd}
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="cpwd">Re-Password: </label>
                            <input
                                type="password"
                                name="cpwd"
                                id="cpwd"
                                onChange={(e) => handleEdit(e)}
                                value={UserDetails.cpwd}
                            />
                        </div>

                        <input
                            type="submit"
                            value={'register'}
                        />
                        <p className="message">Already have an account? <Link to={'/login'}>Login</Link></p>

                    </form>
                </div>
                <div className="svg_container">
                    <img src={signup} alt="signup" className='signup_svg_image' />
                </div>
            </section>
        </Fragment>
    )
}

export default Register;