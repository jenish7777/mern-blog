import {useSelector} from "react-redux"
import { Outlet , Navigate } from "react-router-dom"
import React from 'react'

export default function OnlyAdminPrivateRoute() {
    const {currentUser} =useSelector((state)=>state.user)
  return currentUser && currentUser.isAdmin ? (
  < Outlet />
) : (
<Navigate to="/sign-in" />
);
}
