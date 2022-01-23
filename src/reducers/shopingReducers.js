import {addShopping} from '../types/types'

const initialState ={
    items:[],
}


export const shopingReducers = (state = initialState, action)=>{
    switch (action.type) {
        case addShopping.add_to_cart:
            let newItem = action.payload
            let itemInCart = state.items.find((item) => item.product === newItem.product);
            return itemInCart
            ? {
                ...state,
                items: state.items.map((it) =>
                  it.product === newItem.product
                    ? { ...it, cantidad: it.cantidad + 1 }
                    : it
                ),
              }
            : {
                ...state,
                items: [...state.items, { ...newItem, cantidad: 1 }],
              };
            case addShopping.remove_one_from_cart:
                let itemToDelete = state.items.find((item) => item.product === action.payload);
                return itemToDelete.cantidad > 1
                    ? {
                        ...state,
                        items: state.items.map((item) =>
                        item.product === action.payload
                            ? { ...item, cantidad: item.cantidad - 1 }
                            : item
                        ),
                    }
                    : {
                        ...state,
                        items: state.items.filter((item) => item.product !== action.payload),
                    };
    
            case addShopping.remove_all_from_cart:
                return{
                    ...state,
                    items: state.items.filter((item) => item.product !== action.payload),
                  };
            case addShopping.clear_cart:
                return{
                    items:[]
                }
    
        default:
            return state;
    }
}