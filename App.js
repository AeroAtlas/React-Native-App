//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View id="viewContainer" style={ {padding: 50} }>
      <View id="viewInput" style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <TextInput
          placeholder="Goal"
          style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}
        />
        <Button title="ADD"/>
      </View>
      <View id="viewOutput">
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
