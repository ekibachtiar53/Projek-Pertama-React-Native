import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Estate = () => {
  return (
    <View>
      <Text style={styles.text1}>Estate</Text>
      <Text style={styles.text2}>Best discovery ever</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#151619',
    marginLeft: 24,
    marginTop: 30
  },
  text2: {
    fontFamily: 'poppins',
    fontSize: 14,
    color: '#6B6978',
    marginLeft: 24,
    marginTop: 10
  }
})


export default Estate;
