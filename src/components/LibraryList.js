import { connect } from 'react-redux'
import { dispatch } from 'redux'
import React, { Component } from 'react'
import { View, Text, ScrollView, Switch } from 'react-native'
import { Button } from './common/Button'
import Item from './Item'

function myDispatch(dispatch) {
  return { type: 'changeCandy', payload: 99 }
}

class LibraryList extends Component {
  renderItems() {
    console.log('dispatch is ', dispatch)
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
        <Button onPress={() => this.props.myDispatch()}>
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

export default connect(
  mapStateToProps,
  { myDispatch: myDispatch }
)(LibraryList)
