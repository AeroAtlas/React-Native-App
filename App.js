//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [storedText, setStoredText] = useState([]);
  const textInputHandler = newText => setEnteredText(newText);
  const addTextHandler = () => setStoredText(currentText => [...currentText, enteredText]);
  return (
    <View id="viewContainer" style={styles.viewRootContainer}>
      <View id="viewInputContainer" style={styles.viewInputContainer}>
        <TextInput
          placeholder="Goal" style={styles.textInputField}
          onChangeText={textInputHandler} //no () to update on keystroke instead of instantly
          value={enteredText}
        />
        <Button title="ADD" onPress={addTextHandler}/>
      </View>
      <ScrollView id="viewOutputContainer">
        {storedText.map(text => <View key={text} style={styles.textOutputListItem}><Text>{text}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewRootContainer: {
    padding: 50
  },
  viewInputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  textInputField: {
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
  },
  textOutputListItem: {
    padding: 10, margin: 10, backgroundColor: 'grey', borderColor: 'black', borderWidth: 1
  }
});
