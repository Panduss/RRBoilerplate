import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { storeJwt } from './middleware';

 const saveToLocalStorage = (state) => {
   try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
   } catch(e) {
     console.log(e)
   }
 }

 function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
  applyMiddleware(ReduxThunk, storeJwt),
  devTools
)

const store = createStore(reducer, persistedState, enhancer)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store