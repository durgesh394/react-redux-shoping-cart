import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, DEL, INC } from '../state/action/action.';

const Cart = () => {
  const dispatch = useDispatch();
  const { shoppingcart, totalQty, Totalprice } = useSelector(state => state.Reducers)
  return (
    <>
       {
        shoppingcart.length ?  
        <div className="cart_container">
        <div className='cart_wrapper'>
          <table class="mt-100 table table-borderless carttable" >
            <thead>
              <tr style={{ backgroundColor: "#F09912" }}>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                shoppingcart.map((cart) => {
                  return (
                    <>
                      <tr>
                        <td scope="row"><img src={`.${cart.img}`} alt="" className='cartimg' /></td>
                        <td>{cart.name}</td>
                        <td> ₹ {cart.price}</td>
                        <td>
                          <span onClick={() => { dispatch({ type: DEC, DECID: cart.id }) }} style={{ backgroundColor: "#D5DBDB", padding: "1px" }}> <i className="fa-solid fa-minus"></i></span>
                          <span style={{ padding: "1px", backgroundColor: "#D5DBDB" }}>{cart.qty}</span>
                          <span onClick={() => { dispatch({ type: INC, INCID: cart.id }) }} style={{ backgroundColor: "#D5DBDB", padding: "1px" }}> <i class="fa-solid fa-plus"></i></span>
                        </td>
                        <td onClick={() => { dispatch({ type: DEL, DELID: cart.id }) }}><i class="fa-solid fa-trash"></i></td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="cart_tatalpayCaon">
          <h3>Cart Summary</h3>
          <div className="cart_totalprice" style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <span>Tatalprice</span>
            <span> ₹ {Totalprice}</span>
          </div>
          <div className="cart_totalQty" style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <span>Total Quantity</span>
            <span>{totalQty}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0px" }}>
            <button className='cartpaybtn'>Pay</button>
          </div>
        </div> 
        </div>
        : <p className="Empatycart">Your Cart is Empty..</p>
       }
       
    </>
  )
}

export default Cart
