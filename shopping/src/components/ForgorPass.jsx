import React from 'react'
import {sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../app/Firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { emailChange } from '../slices/userSlice'

function ForgorPass() {
    const {email} = useSelector((state)=>state.user);
    const dispatch = useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        sendPasswordResetEmail(auth,email)
        .then(()=>{console.log("Şifre değişim talebin başarılı bir şekilde alınmıştır. Email'inizi kontrol ediniz.")})
        .catch((e)=>{console.log(e)});
    };

  return (
    <div>
    <div>
        <div>
      <div className='si-form border mt-3 p-3 rounded border-1'>
        <h1 className='fs-4'>Forgot Password</h1>
        <form onSubmit={handleSubmit} className='mb-5'>
          <div>
          <label className='form-label'>Email adress</label>
          <input type="email"
          className='form-control'
          onChange={e=>{dispatch(emailChange(e.target.value))}}
          value={email} />
          </div>
          <button className='btn mt-3 btn-success'>Email'e link gönder.</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ForgorPass
