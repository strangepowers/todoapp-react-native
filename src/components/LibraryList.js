import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

class LibraryList extends Component {
  render() {
    console.log('props are ', this.props.libraries)
    return <Text> fun </Text>
  }
}

const mapStateToProps = state => {
  console.log('state is ', state)
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
