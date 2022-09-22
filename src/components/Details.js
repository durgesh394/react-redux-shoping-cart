import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { ADD_TO_CART } from '../state/action/action.';
const Details = () => {
  const dispatch = useDispatch();
  const from_nav_data_id = useParams();
  const data_id = parseInt(from_nav_data_id.id);
  const state = useSelector(state => state.ItemReducers)
  const fillterdata = state.find(data => data.id === data_id);

  return (
    <>
      <div className="detail_Container">
        <div className="detail_wrapp">
          <div className="detail_img">
            <img src={`.${fillterdata.img}`} alt="detail-image" className='detail-img' />
          </div>
          <div className="detail_descri">
            <h1>{fillterdata.name}</h1>
            <p className='detail_price'> ₹ {fillterdata.price}</p>
            <p className='detail_desc'>{fillterdata.desc}</p>
            <button className='addtocart_btn' onClick={() => { dispatch({ type: ADD_TO_CART, id: data_id, data: [fillterdata] }) }}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
