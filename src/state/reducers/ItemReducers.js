
import Itemapi from '../Item'
const ItemReducers = (state = Itemapi, action) => {
  
        switch(action.type){

            case "PRODUCT" :
                    const check = state.find(p=>p.id===action.id);
                    console.log(check)

            default :
            return state;
        }
    
}

export default ItemReducers
