import { combineReducers } from 'redux'

import genderReducer from './Gender/genderReducer'


const rootReducer = combineReducers({
    genderR: genderReducer

})

export default rootReducer