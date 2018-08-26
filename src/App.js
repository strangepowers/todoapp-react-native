import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const App = ({}) => (
  <Provider store={createStore(reducers)}>
    <View style={styles.container}>
      <Text>I'm App</Text>
    </View>
  </Provider>
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center'
  }
})
