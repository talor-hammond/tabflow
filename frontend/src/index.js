import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import * as serviceWorker from './serviceWorker'

// Redux:
import reducers from './state/reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()