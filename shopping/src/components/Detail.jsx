import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { increase, decrease } from '../slices/productSlice';
import { addBasket } from '../slices/basketSlice';
import {db} from '../app/Firebase/firebase';
import {collection , addDoc} from 'firebase/firestore';



const ref = collection(db, "items");

function Detail() {
    const { updatedProduct, piece } = useSelector((state) => state.product)
    const { calculateTotal } = useSelector((state) => state.basket)
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
                {updatedProduct.map((item) => {
                    return <div key={item.id} className="col-sm mt-3">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title mt-3"> {item.name}</h5>
                                        <p className="card-text mt-3">{item.description}</p>
                                        <p className="card-text">Fiyat:{item.price}₺</p>
                                        <button onClick={() => { dispatch(increase(item.id)) }} className='btn'> <GoChevronUp /> </button>
                                        <p className='ms-3 mt-4'>{item.piece}</p>
                                        <button onClick={() => { dispatch(decrease(item.id)) }} className='btn mb-4'> <GoChevronDown /> </button>
                                        <button onClick={() => {dispatch(addBasket(item))}} className="btn btn-dark mb-5 ms-5 btn-lg" type="button">Sepete Ekle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Detail
