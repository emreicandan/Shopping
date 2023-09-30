import React from 'react'
import { useSelector } from 'react-redux'

function Overview() {
  const { basket } = useSelector((state) => state.basket)
  const { detail } = useSelector((state) => state.overview)
  return (
    <div className="container">
      <div className="row border border-1 rounded mt-3">
        <div>
          <h3>Siparişiniz başarıyla alınmıştır.</h3>
        </div>
        <p>Ürünleriniz :</p>
        {basket.map((item) => {
          return <div className="col-sm-2">
            <div class="card">
              <img class="card-img-top" src={item.img} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">{item.name}</p>
              </div>
              <div className="container">
              </div>
            </div>
          </div>
        })}

        <div className="container">
          <div className="row">
            <div className="col-sm-6">{detail.map((item) => {
              return <p className='mt-4 fs-4'> Sipariş No: <span className='text-danger'> {item.orderNo} </span></p>
            })}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
