import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import ToDoList from './components/LibraryList'

const App = ({}) => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="To Do List" />
        <ToDoList />
      </View>
    </Provider>
  )
}

export default App
