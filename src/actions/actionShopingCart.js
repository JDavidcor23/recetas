import {addShopping} from '../types/types'


export const setItemCart = (item) =>{
    return{
        type: addShopping.add_to_cart,
        payload: item
    }
}
export const clearItemsCart = () =>{
    return{
        type: addShopping.clear_cart,
    }
}
export const delFromCart = (name, all = false) =>{
    if(all){
        return{
            type: addShopping.remove_all_from_cart,
            payload:name
        } 
    }
    else{
        return{
            type: addShopping.remove_one_from_cart,
            payload:name
        } 
    }
}