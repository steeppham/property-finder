'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

class PropertyFinder extends Component {
  render() {
    return (
      <Text style={styles.text}>Hello World!</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 100
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
