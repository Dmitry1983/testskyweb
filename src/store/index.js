import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import rootReducer from '../reducers/index'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['posts'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(logger))
const persistor = persistStore(store)

export { store, persistor }

// export default createStore(rootReducer, applyMiddleware(logger))
