import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'hello-naveen',
    storage,
  }

const middleware=[thunk]
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=createStore(
    persistedReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    
)
export const persistor=persistStore(store)

