import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import RenderLoader from './src/components/RenderLoader'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<RenderLoader />} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App
