/* @flow weak */

import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

const Item = ({ item }) => (
  <View style={styles.container}>
    <Text key={item.id}> {item.title} </Text>
    <Switch value={item.finished} />
  </View>
)

export default Item

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    padding: 20,
    justifyContent: 'space-between'
  }
})
