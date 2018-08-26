/* @flow weak */

import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Switch } from 'react-native'

const Item = ({ item, myDispatch }) => (
  <View style={styles.container}>
    <Text> {item.title} </Text>
    <Switch onValueChange={x => myDispatch()} value={item.finished} />
  </View>
)

const mapStateToProps = state => {
  return {}
}

function myDispatch(dispatch) {
  console.log('in mydispatch')
  return { type: 'finishedTask', payload: 99 }
}

export default connect(
  mapStateToProps,
  { myDispatch: myDispatch }
)(Item)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    padding: 20,
    justifyContent: 'space-between'
  }
})
