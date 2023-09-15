import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/userContext';

function Navbar() {
  const [menuBtn, setMenuBtn] = useState(false)
  const { userData, getuserData } = useContext(userContext);
  getuserData();
  console.log(userData);

  const handleMenuBtn = () => {
    setMenuBtn(!menuBtn);
  }

  return (
    <Fragment>
      <nav>
        <h1 className="logo"><span>Insta</span>Met</h1>
        <input type="checkbox" name="check" id="check" />
        <label htmlFor="check" className='menu_btn' onClick={() => handleMenuBtn()}><i className={(!menuBtn) ? 'fa fa-bars' : 'fa fa-close'}></i></label>
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
          <li>
            <Link to={'/meeting'}><i className="fa fa-video-camera"></i> Join</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navbar