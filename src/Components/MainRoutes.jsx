import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Kids from './Kids'
import Men from './Men'
import Women from './Women'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import AddToCart from './AddToCart'
import ProtectedRoute from './ProtactRouter'
import YourOrdres from './YourOrdres'

function MainRoutes({setIsLoggedIn}) {
  return (
    <div>
      <Routes>
        <Route path='/' element={
           <Home />
        } />
        <Route path='/kids' element={
          <ProtectedRoute> <Kids /> </ProtectedRoute>
        } /> 
        <Route path='/men' element={
          <ProtectedRoute> <Men /> </ProtectedRoute>
        } />
        <Route path='/women' element={
          <ProtectedRoute> <Women /> </ProtectedRoute>
        } />
        <Route path='/cart' element={
          <ProtectedRoute> <AddToCart /> </ProtectedRoute>
        } />
		 <Route path='/yourOrders' element={
          <ProtectedRoute> <YourOrdres /> </ProtectedRoute>
        } />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default MainRoutes