import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app/app.js'
import linkageApp from './reducers'

let store = createStore(linkageApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)