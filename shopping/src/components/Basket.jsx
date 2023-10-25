import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, calculateTotal } from '../slices/basketSlice';
import { useFormik } from 'formik';
import { Schema } from '../app/schema/schema';
import { addDetail } from '../slices/OverSlice';
import { Link } from 'react-router-dom';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {addProduct, db} from '../app/Firebase/firebase';
import {collection , addDoc} from 'firebase/firestore';


const ref = collection(db , 'items');

function Basket() {
    const { basket, total } = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const [data , isLoading] = useCollectionData(ref);
 
    useEffect(() => {
        dispatch(calculateTotal());
    }, [basket]);


    const onSubmit = async (values, actions) => {
        dispatch(addDetail(values));
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        actions.resetForm();

        addProduct(basket)
    }


    const { values, handleSubmit, isSubmitting, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            passAgain: "",
            orderNo: Math.floor(Math.random() * 20000 * 20)
        },
        validationSchema: Schema,
        onSubmit,
    });

    return (
        <div className="container">
            <div className="row">
                <div>
                   {basket.lenght >0 ? <h4 className='mt-2 fw-lighter'>Sepetinizdeki Ürünler</h4> : <h1 className='mt-5'>Sepetiniz Boş</h1>}
                </div>
                <hr />
                {
                    basket.map((item) => {
                        return <div key={item.id} className="col-sm-2">
                            <div className="card">
                                <img className="card-img-top" src={item.img} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">{item.name}</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className='fs-5'> {item.piece} Adet :</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className='fs-5'>{item.price * item.piece}₺</p>
                                        </div>
                                        <p> Birim fiyat : {item.price}₺</p>

                                        <button onClick={() => { dispatch(removeItem(item.id)) }} className='btn btn-danger btn-sm mt-1'>Çıkart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <hr className='mt-3' />
                <div> <p className='fs-3 fw-lighter'>Toplam Tutar : {total}₺</p> </div>
                {
                  <form className='mb-4' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label"> İsim Soyisim</label>
                        <input type="text"
                            id='name'
                            onChange={handleChange}
                            value={values.name}
                            className="form-control"
                            placeholder='İsim , Soyisim bilginizi giriniz.'
                        />
                        {errors.name && <p className='fs-6 text-danger'>{errors.name}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email"
                            id='email'
                            onChange={handleChange}
                            value={values.email}
                            className="form-control"
                            placeholder='Email adresinizi giriniz.'
                        />
                        {errors.email && <p className='fs-6 text-danger'>{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Şifre</label>
                        <input type="password"
                            id='password'
                            onChange={handleChange}
                            value={values.password}
                            className="form-control"
                            placeholder='Parolanızı giriniz.'
                        />
                        {errors.password && <p className='fs-6 text-danger'>{errors.password}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Şifre Tekrarı</label>
                        <input type="password"
                            id='passAgain'
                            onChange={handleChange}
                            value={values.passAgain}
                            className="form-control"
                            placeholder='Parolarınızı tekrar giriniz.'
                        />
                        {errors.passAgain && <p className='fs-6 text-danger'>{errors.passAgain}</p>}
                    </div>
                    <button disabled={isSubmitting} type='submit' className='btn btn-success'>Kaydet</button>
                    <Link to={'/overview'}> <button className='btn btn-primary ms-1'> Sipariş detaylarını görüntüle</button> </Link>
                </form> 
                }
                <hr />
            </div>
        </div>
   )
}

export default Basket
