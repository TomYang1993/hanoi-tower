import { createStore } from 'redux'
import disks from './reducer'
import {
    moveDisk,
    judgeWinner
  } from './action'

const store = createStore(disks)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(moveDisk({id: 0, position: 8}))
// store.dispatch(moveDisk('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))

// Stop listening to state updates
unsubscribe()
