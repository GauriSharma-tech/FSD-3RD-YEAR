import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import UserDashboard from './Pages/UserDashboard'
import ShoppingItems from './Components/ShoppingItems'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserDashboard></UserDashboard>}>
        <Route index element={<ShoppingItems></ShoppingItems>}></Route>
        <Route path='/cart' element={<h1>View cart</h1>}></Route>
        <Route path='/order' element={<h1>view Orders</h1>}></Route>
        <Route path='/logout' element={<h1>LogOut</h1>}></Route>
        </Route>
        <Route path='/register' element={<h1>Register</h1>}></Route>
        <Route path='/login' element={<h1>Login page</h1>}></Route>
        <Route path='*' element={<h1>404 Error Page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
