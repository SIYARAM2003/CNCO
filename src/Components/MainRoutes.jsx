import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './Home'
import Kids from './Kids'
import Men from './Men'
import Women from './Women'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import AddToCart from './AddToCart'

function MainRoutes() {
  return (
	<div>
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/kids' element={<Kids/>} />
			<Route path='/men' element={<Men/>} />
			<Route path='/women' element={<Women/>} />
			<Route path='/login' element={<Login/>} />
			<Route path='/forgotPassword' element={<ForgotPassword/>} />
			<Route path='/signUp' element={<SignUp/>} />
			<Route path='/cart' element={<AddToCart/>} />
		</Routes>
	</div>
  )
}
 
export default MainRoutes