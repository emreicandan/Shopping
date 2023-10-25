import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../app/Firebase/firebase';

function AuthLayout() {
const [user , isLoading] = useAuthState(auth)




  if(isLoading){
    return <h1>Loading...</h1>
  };

  if(user){
    return <Navigate to={'/landing'} />
  };

  return (
 <div>
  <Outlet/>
 </div>
  )
}

export default AuthLayout
