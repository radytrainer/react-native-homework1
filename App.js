

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Button} from 'react-native';




export default class App extends Component {

  // // helper function
  // helperFun = () => {
  //   console.log("Goody bye my Love!!");
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: 200,
    },
    textStyle: {
      color: 'red',
      fontSize: 20,
    }
});

