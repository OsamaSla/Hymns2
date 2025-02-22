import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function AddHymn({ navigation }) {
  const [hymnText, setHymnText] = useState('');

  const handleAddHymn = () => {
    // Add your logic to add the hymn
    console.log('Adding hymn:', hymnText);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>إضافة ترنيمة</Text>
        <TextInput
          style={styles.input}
          placeholder="نص الترنيمة"
          placeholderTextColor="#888"
          value={hymnText}
          onChangeText={setHymnText}
          multiline
        />
        <Button title="إضافة" onPress={handleAddHymn} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // ... existing styles ...
});