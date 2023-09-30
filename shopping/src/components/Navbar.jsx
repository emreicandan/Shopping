import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { calculateTotal } from '../slices/basketSlice'

function Navbar() {

  const { basket, piece } = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [basket])


  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <Link className='navbar-brand mx-3 text-light' to={'/'}>Vitamin Bar</Link>
        <div>
          <Link className='mx-5 rounded-5 border-0' to={'/basket'}>{AiOutlineShoppingCart()}</Link>
          <p className='text-light ms-5'> {piece} </p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
