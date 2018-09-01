import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this._onPressButton2 = this._onPressButton2.bind(this);
  }
  _onPressButton(props) {
    console.log(" ON PRESSSSSSS ", props)
    this.props.resetNum()
  }
  _onPressButton2() {
    console.log(this.props)
    console.log(" ON PRESSSSSSS 2")
    this.props.incrementNum()
  }
  render() {
    console.log("NEW props are ", this.props)
    return (
      <View>
        <Text>The number is {this.props.number} </Text>
        <TouchableOpacity onPress={() => (this._onPressButton(this.props))}>
          <Text>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton2}>
          <Text>Press Me 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const sTP = ({ count }) => {
  return {number: count}
}

const INC_ACTION = {
  type: "INC_ACTION"
}

const RESET_ACTION = {
  type: "RESET"
}

function mapDispatchToProps(dispatch) {
    return({
        incrementNum: () => {dispatch(INC_ACTION)},
        resetNum: () => {dispatch(RESET_ACTION)}
    })
}

let NewComp = connect(sTP, mapDispatchToProps)(MyComponent)

const App = ({}) => (
  <Provider store={createStore(reducers)}>
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>I'm App</Text>
      <NewComp />
    </View>
  </Provider>
)

//export default App

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center'
  }
})
