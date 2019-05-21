import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DataStore from './core/data-store'

DataStore.init()
console.log(DataStore.grpList)

let win: any = window
win.DataStore = DataStore

ReactDOM.render(
  <h2>Duty Schedule 2</h2>,
  document.getElementById("app")
)
