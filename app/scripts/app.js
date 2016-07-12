import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import Main from './Main'

const store = createStore(
    reducer,
    compose(
      applyMiddleware(
        thunkMiddleware // enables dispatch() calls
      )
    )
)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
