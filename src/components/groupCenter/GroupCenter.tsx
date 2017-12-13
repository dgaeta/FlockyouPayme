/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View } from "react-native";

export default class GroupCenter extends React.Component<{}, {}> {

  public render() {
    return (
      <View style={styles.container}>
        <Text>
          This is where the system will find out if you have a group and shit.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
