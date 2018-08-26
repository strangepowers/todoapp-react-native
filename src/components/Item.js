/* @flow weak */

import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Switch } from 'react-native'

const changeCandy = payload => ({
  type: 'changedFinishedValue',
  payload
})

//  function myDispatch(dispatch) {
//    changeCandy: return { type: "changeCandy", payload: 99}
// }

const mapDispatchToProps = dispatch => ({
  findle: payload => dispatch(changeCandy(payload))
})

const Item = props => {
  console.log('props in Item are ', props)
  return (
    <View style={styles.container}>
      <Text> {props.item.title} </Text>
      <Switch
        onValueChange={x => props.findle({ id: props.item.id, finished: x })}
        value={props.item.finished}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {}
}

function myDispatch(dispatch) {
  console.log('in mydispatch')
  return { type: 'finishedTask', payload: 99 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    padding: 20,
    justifyContent: 'space-between'
  }
})
