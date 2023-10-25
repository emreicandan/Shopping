import React from 'react';
import { Navigate , Outlet } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../app/Firebase/firebase';


function MainLayout() {
  const [user , isLoading] =  useAuthState(auth);

  if(isLoading){
    return <h1>Loading...</h1>;
  };

  if(!user){
    return <Navigate to={"/sign-in"} replace/>
  };
  return (
         <Outlet/>
  )
}

export default MainLayout
