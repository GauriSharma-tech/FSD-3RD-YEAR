import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    )
}

export default UserDashboard
