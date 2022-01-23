import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { shopingReducers } from '../reducers/shopingReducers';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cart: shopingReducers,
    login: loginReducer,
    register: registerReducer,
})


export const store = createStore(
    reducers,
     composeEnhancers( 
         applyMiddleware(thunk))
   
)