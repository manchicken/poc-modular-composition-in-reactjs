import React from "react"
import ReactDOM from "react-dom"
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import BgButton from './lib/bg-button'
import ReducerRunner from './lib/reducer-runner'

import "./styles.css"

const store = createStore(ReducerRunner, {})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BgButton label="Foo!" />
    </div>
    </Provider>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
