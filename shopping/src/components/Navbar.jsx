import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { calculateTotal } from '../slices/basketSlice'
import { CgProfile } from 'react-icons/cg'

function Navbar() {

  const { basket, piece } = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [basket])


  return (
    <div>
      
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div>
        <Link className='navbar-brand mx-3 text-light' to={'/landing'}>Vitaminbar.com</Link>
        <Link className='navbar-brand mx-3 text-light' to={'/profile'} >{CgProfile()}</Link>
        </div>
        <div>
          <Link className='mx-5 rounded-5 border-0' to={'/basket'}>{AiOutlineShoppingCart()}</Link>
          <p className='text-light ms-5'> {piece} </p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
