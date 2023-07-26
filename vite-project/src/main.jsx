import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './Components/Redux/Store.jsx'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import persistStore from 'redux-persist/es/persistStore'

// let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading ={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
   </Provider>
  </React.StrictMode>
)
