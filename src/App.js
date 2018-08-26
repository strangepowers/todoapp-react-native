import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = ({}) => (
  <View style={styles.container}>
    <Text>I'm App</Text>
  </View>
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
