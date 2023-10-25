import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { nameChange , emailChange , passChange } from '../slices/userSlice';
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../app/Firebase/firebase';
import { Link } from 'react-router-dom';

function SignUp() {
    const {name , email , password} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth)=>{updateProfile(auth.user, {displayName : name})})
        .catch((e) => { console.log(e) });

        dispatch(emailChange(""));
        dispatch(passChange(""));
    }

  return (
    <div>
          <div>
      <div className='si-form border mt-3 p-3 rounded border-1'>
        <h1 className='fs-4'>Create New Accound</h1>
        <form onSubmit={handleSubmit} className='mb-5'>
        <div className="mb-1">
            <label className="form-label">Enter your name</label>
            <input type="text"
              className="form-control"
              value={name}
              onChange={e => dispatch(nameChange(e.target.value))} />
          </div>
          <div className="mb-1">
            <label className="form-label">Email address</label>
            <input type="email"
              className="form-control"
              value={email}
              onChange={e => dispatch(emailChange(e.target.value))} />
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input type="password"
              className="form-control"
              value={password}
              onChange={e => dispatch(passChange(e.target.value))} />
          </div>
          <button type="submit" className="btn mt-2 btn-primary">Sign up</button>
          <div className='mt-3'>
            <Link to={'/sign-in'}>Already have an account ? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
