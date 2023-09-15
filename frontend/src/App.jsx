import React, { Fragment, useEffect, useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Index from './components/Index';
import userContext from '../context/userContext';
import { verifyToken } from './services/ServiceWorkers';
import Meeting from './components/Meeting';
import Footer from './components/Footer';

function App() {
  const [userData, setUserData] = useState(null);

  const getuserData = () => {
    const Authorization_Token = localStorage.getItem('Authorization_Token');
    if (Authorization_Token) {
      verifyToken(Authorization_Token)
        .then((response) => {
          setUserData(response)
        });
    } else {
      setUserData(null);
    }
  }

  useEffect(() => {
    getuserData();
  }, [])

  return (
    <Fragment>
      <userContext.Provider value={{ setUserData, userData, getuserData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Index />} />
          <Route path='/meeting' element={<Meeting />} />
        </Routes>
        <Outlet />
        <Footer />
      </Router>
      </userContext.Provider>
    </Fragment>
  )
}

export default App