import React from 'react'
import { collection, doc } from 'firebase/firestore'
import { db, deleteProduct, addProduct, auth } from '../app/Firebase/firebase';
import { useProductListener } from '../app/Firebase/firebase';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';




const ref = collection(db, "items");

function Profile() {
    const [user] = useAuthState(auth);
    const { use } = useSelector((state) => state.basket);
    useProductListener();


    const handleClick = () =>{
        signOut(auth);
    };
    return (
        <div className='container'>

        <div className='container mt-3 '>
            <div className="row">
                <div className="col-sm-4 border p-3 rounded">{
                    user ? <h5> İsim Soyisim: {user.displayName}                 <span> <button onClick={handleClick} className='mx-5 btn btn-danger btn-sm'> Çıkış</button> </span> </h5> : <h5> İsim Soyisim : </h5>
                }
                </div>
                <div className="col-sm-4">

                </div>
                <div className='col-sm-4'>

                </div>
            </div>
        </div>

            <div className='row border rounded mt-4 p-3'>
            <h5 className='mx-2 mb-4'>Geçmiş Siparişleriniz :</h5>
            {
                use.map((item) =>
                    item.item.map((product) =>
                    <div key={product.id} className="container">
                    <div className="row border mb-2 rounded">
                        <div className='col-sm-3'>
                        <img className="card-img-top" src={product.img} alt="Card image cap" />
                        </div>
                        <div className="col-sm-4 mt-2 mx-5">
                            <p className="card-text">{product.name}</p>
                            <p> {product.description} </p>
                        </div>
                        <div className="col-sm-4">
                            <div className="row mt-2 mx-5">
                                <p className='text-success'> <span className='text-dark'>Sipariş Durumu :</span>  Teslim Edildi</p>
                                <hr />
                                <p> Birim fiyat : {product.price}₺</p>
                            </div>
                        </div>
                    </div>
                </div>
                    )

                )
            }
            </div>
        </div>
    )
}

export default Profile
