import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import bell from '../../assets/icons/fi_bell.png';

const Estate = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.wrapper2}>
          <Text style={styles.estate}>Estate</Text>
          <Text style={styles.text}>Best discovery ever</Text>
        </View>
        <View style={styles.bellWrapper}>
          <Image source={bell} style={styles.bell} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estate: {
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#151619',
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 14,
    color: '#6B6978',
  },
  bell: {
    height: 24,
    width: 24,
    marginLeft: 100,
  },
  bellWrapper: {
    borderWidth: 8,
    borderColor: '#F7F6F9',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
  },
  wrapper: {
    padding: 24,
    flexDirection: 'row',
  },
  wrapper2: {
    marginRight: 100,
  },
});

export default Estate;
