import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { emailChange , passChange } from '../slices/userSlice'
import { auth } from '../app/Firebase/firebase'
import { Link } from 'react-router-dom';



function SignIn() {
    const {email , password} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
  

    const handleSubmit =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth , email , password)
        .then(() => {
          alert("Başarılı bir şekilde giriş yaptınız.");
          dispatch(emailChange(""));
          dispatch(passChange(""));
        })
        .catch(() => alert("e-posta yada şifreniz yanlış tekrar deneyiniz."));
    };


  return (
    <div>
        <div>
      <div className='si-form border mt-3 p-3 rounded border-1'>
        <h1 className='fs-4'>Sign in</h1>
        <form onSubmit={handleSubmit} className='mb-5'>
          <div>
          <label className='form-label'>Email adress</label>
          <input type="email"
          className='form-control'
          onChange={e=>{dispatch(emailChange(e.target.value))}}
          value={email} />
          </div>
          <div>
            <label className='form-label'>Password</label>
          <input className='form-control'
           type="password"
           onChange={(e)=>{dispatch(passChange(e.target.value))}}
           value={password} />
          <button onClick={()=>{}} className='btn mt-2 btn-success'> Sign in </button>
          </div>
          <div className=' mt-4'>
          <Link to={"/sign-up"}>Don't have an account ? Sign up </Link>
          </div>
          <div className='mt-2'>
          <Link to={'/forgot-pass'}>Forgot Password ?</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignIn
