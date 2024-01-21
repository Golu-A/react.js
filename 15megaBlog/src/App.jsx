
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './Component';
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
    <div className='p-4 w-full block'>
      <Header />
      <main>
      TODO: <Outlet />
      </main>
      <Footer />
    </div>
    </div>
  ) : null

  // return (
  //   <h1 className="text-3xl font-bold underline bg-slate-700">
  //     Hello world!
  //   </h1>
  // )
}

export default App
