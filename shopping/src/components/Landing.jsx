import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { goDetail } from '../slices/productSlice'


function Landing() {
    const { product } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div className="row">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://lh4.googleusercontent.com/CBsNJTpMc10FcYaawdVsomCwUmYFqtSqzmqeFOBvxJ6lmwR8UDu7UJiAgwqaw20gsKJjFhCDAW3Gp1Q3BIWdmMO53st-duGBi1Hs2YewPVPgO40S_YhJsVNgfzEpw7RAXvWngTyrBs-wgLcHFHzttQ" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {
                    product.map((item) => {
                        return (
                            <div key={item.id} className="col-sm-4 card my-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className='fs-3 fw-bold'> {item.price}₺</p>
                                            <Link to={'detail'}> <button onClick={() => { dispatch(goDetail(item.id)) }} className='btn btn-warning'>Ürünü İncele</button> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Landing
