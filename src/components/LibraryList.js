import { connect } from 'react-redux'
import { dispatch } from 'redux'
import React, { Component } from 'react'
import { View, Text, ScrollView, Switch, TextInput } from 'react-native'
import { Button } from './common/Button'
import Item from './Item'

function myDispatch(dispatch) {
  return { type: 'changeCandy', payload: 99 }
}

class LibraryList extends Component {
  renderItems() {
    console.log('Props in fn are ', this.props.libraries)
    return this.props.libraries.map(item => {
      return <Item key={item.id} item={item} />
    })
  }
  render() {
    console.log('props are ', this.props)
    return (
      <View>
        {this.renderItems()}
        <Text> {this.props.candy} </Text>
        <TextInput value={"new item"} style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
        <Button onPress={() => this.props.myDispatch()}>
          <Text> OK </Text>
          <Text> Press Me </Text>
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log('state is ', state)
  console.log('in mapState to Props')
  return { libraries: state.libraries.libraries, candy: state.libraries.candy }
}

const changeCandy = payload => ({
  type: 'changedFinishedValue',
  payload
})

const mapDispatchToProps = dispatch => ({
  findle: payload => dispatch(changeCandy(payload)),
  myDispatch: payload => dispatch(myDispatch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryList)
