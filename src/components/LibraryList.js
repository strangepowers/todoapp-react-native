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
  state = {
    text: 'My new Item :)'
  }
  renderItems() {
    return this.props.libraries.map(item => {
      return <Item key={item.id} editing={this.props.editing} item={item} />
    })
  }
  render() {
    return (
      <View>
        {this.renderItems()}
        <Text> {this.props.candy} </Text>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <Button onPress={() => this.props.findle(this.state.text)}>
          <Text> Add new Item </Text>
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries.libraries,
    candy: state.libraries.candy,
    editing: state.editing
  }
}

const changeCandy = newValue => {
  console.log('new item is ', newValue)
  return {
    type: 'addNewItem',
    payload: newValue
  }
}

const mapDispatchToProps = dispatch => ({
  findle: payload => dispatch(changeCandy(payload)),
  myDispatch: payload => dispatch(myDispatch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryList)
