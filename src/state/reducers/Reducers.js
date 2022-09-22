import { ADD_TO_CART, DEC, DEL, INC } from '../action/action.';

  export const  cartdata = {
    shoppingcart : [],
    totalQty : 0,
    Totalprice : 0
  }

const Reducers = (state=cartdata,action) => {
  switch(action.type){
    case ADD_TO_CART :
      const checkInCart = state.shoppingcart.find(data=>data.id == action.id)
         if(checkInCart){
           alert("product already is in Cart")
          return state;
         }
         else{
          alert("Item Added To Cart")
          const searchItem= action.data.find(e=>e.id === action.id)
          const addtocart_price = state.Totalprice + searchItem.price;
          const addtocart_Qty = state.totalQty +  searchItem.qty;
        
          return{
            ...state,
            shoppingcart : [...state.shoppingcart, searchItem] , Totalprice : addtocart_price, totalQty : addtocart_Qty
          }
        }
        case INC : 
           const INC_data = state.shoppingcart.find(data=>data.id == action.INCID);
          if(INC_data.qty>=1){
            INC_data.qty = INC_data.qty + 1
            const INCUP =  state.totalQty+ 1
            const INC_Price = state.Totalprice += INC_data.price;
            return{
             ...state,
             Totalprice : INC_Price, totalQty : INCUP
            }
          }
      case DEC :
             const DEC_data = state.shoppingcart.find(data=>data.id===action.DECID);
              if(DEC_data.qty>1 ){
                DEC_data.qty= DEC_data.qty-1;
                const DECDOWN= state.totalQty = state.totalQty - 1 ;
                const DEC_price = state.Totalprice -= DEC_data.price;
                return{
                  ...state,
                  Totalprice : DEC_price, totalQty : DECDOWN
                }
              }
        case DEL :
          const DEL_data_find = state.shoppingcart.find(data=>data.id===action.DELID);
          const DEL_data = state.shoppingcart.filter(data=>data.id !== action.DELID);
          
          const DEL_Qty = state.totalQty - DEL_data_find.qty
          const DEL_price = state.Totalprice - DEL_data_find.price * DEL_data_find.qty;
        
              return{
                ...state,
                  shoppingcart : [...DEL_data],  Totalprice : DEL_price, totalQty : DEL_Qty
              }

    default:
        return state;
  }
  
}

export default Reducers
