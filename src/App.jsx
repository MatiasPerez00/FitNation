import { useState } from 'react'
import './App.css'
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const [user,setUser]=useState({
    islogged:false,
    token:null,
    email:null,
    membresia:null,
    role:null,
  });


  return (
    <>
      {
        user.islogged?
        <PrivateRoute user={user} setUser={setUser}/>:
        <PublicRoute user={user} setUser={setUser}/>
      }
    </>
  )
}

export default App
