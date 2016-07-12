import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
// import { Router, browserHistory } from 'react-router'

import reducer from './reducers'
// import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { Provider } from 'react-redux'
// import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

import Main from './Main'

const store = createStore(
    reducer,
    compose(
      applyMiddleware(
        thunkMiddleware, // enables dispatch() calls
      )
    )
)
//
// const history = syncHistoryWithStore(browserHistory, store)
//


render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
