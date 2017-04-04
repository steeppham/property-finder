'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, NavigatorIOS, View } from 'react-native';

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: HelloWorld,
      }}/>
    );
  }
}

class HelloWorld extends Component {
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
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
