import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/userContext';

function Navbar() {
  const { userData, getuserData } = useContext(userContext);
  getuserData();
  console.log(userData);
  
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Dashboard</Link>
          </li>
          <li>
            <Link to={'/register'}>Register</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        </ul>
      </nav>
      {
        (!userData) ? <h1>Logged In</h1> : <h1>Not Logged in</h1>
      }
    </Fragment>
  )
}

export default Navbar