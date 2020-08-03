import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
//import { useHistory } from "react-router-dom";

import rootReducer from './Redux/rootReducer'

const history = createBrowserHistory();


const store = createStore(
    rootReducer
)

export { store, history };