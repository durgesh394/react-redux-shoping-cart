import React from 'react'
import { combineReducers } from 'redux'
import Reducers from './reducers/Reducers'
import ItemReducers from './reducers/ItemReducers'
const rootReducers =combineReducers({
  
Reducers,
ItemReducers
})

export default rootReducers;
