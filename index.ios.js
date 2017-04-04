'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, NavigatorIOS, View } from 'react-native';

var SearchPage = require('./SearchPage');

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: SearchPage,
      }}/>
    );
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
