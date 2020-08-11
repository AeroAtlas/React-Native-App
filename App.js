//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  //start state -> after state
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={ {padding: 30} }>
      <View id="viewInput">
        <Text/>
        <Button title="ADD"/>
      </View>
      <View id="viewOutput">
        ...
      </View>
      {/* <Text>{outputText}</Text>
      <Button title="Click Here" onPress={() => setOutputText('The text changed!')}/> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
