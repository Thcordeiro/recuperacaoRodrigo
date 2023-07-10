import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button/button';

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>0</Text>
      <View style={styles.row}>
        <Button title="7" onPress={() => console.log('7')} />
        <Button title="8" onPress={() => console.log('8')} />
        <Button title="9" onPress={() => console.log('9')} />
        <Button title="÷" onPress={() => console.log('÷')} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => console.log('4')} />
        <Button title="5" onPress={() => console.log('5')} />
        <Button title="6" onPress={() => console.log('6')} />
        <Button title="×" onPress={() => console.log('×')} />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => console.log('1')} />
        <Button title="2" onPress={() => console.log('2')} />
        <Button title="3" onPress={() => console.log('3')} />
        <Button title="-" onPress={() => console.log('-')} />
      </View>
      <View style={styles.row}>
        <Button title="0" onPress={() => console.log('0')} />
        <Button title="." onPress={() => console.log('.')} />
        <Button title="=" onPress={() => console.log('=')} />
        <Button title="+" onPress={() => console.log('+')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 30,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  display: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
});

export default Calculator;