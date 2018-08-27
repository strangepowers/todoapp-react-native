/* @flow weak */

import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { CardSection } from './common/CardSection'
import { Button } from './common/Button'

const changeCandy = payload => ({
  type: 'changedFinishedValue',
  payload
})

const removeItem = payload => ({
  type: 'removeItem',
  payload
})

//  function myDispatch(dispatch) {
//    changeCandy: return { type: "changeCandy", payload: 99}
// }

const mapDispatchToProps = dispatch => ({
  findle: payload => dispatch(changeCandy(payload)),
  removeItem: payload => dispatch(removeItem(payload))
})

const Item = props => {
  return (
    <CardSection>
      <Text> {props.item.title} </Text>
      <View style={styles.view}>
        <Switch
          style={{ marginRight: 10 }}
          onValueChange={x => props.findle({ id: props.item.id, finished: x })}
          value={props.item.finished}
        />
        <Button onPress={() => props.removeItem(props.item.id)}>
          <Text> Remove Item </Text>
        </Button>
      </View>
    </CardSection>
  )
}

const mapStateToProps = state => {
  return {}
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
  },
  view: {
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'flex-end'
  }
})
