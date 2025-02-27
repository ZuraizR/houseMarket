import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'

import Spinner from '../components/Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingSatus } = useAuthStatus()

  if (checkingSatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
