import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function EditHymn({ navigation }) {
  const [hymnId, setHymnId] = useState('');
  const [hymnText, setHymnText] = useState('');

  const handleEditHymn = () => {
    // Add your logic to edit the hymn
    console.log('Editing hymn:', hymnId, 'New text:', hymnText);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>تعديل ترنيمة</Text>
        <TextInput
          style={styles.input}
          placeholder="رقم الترنيمة"
          placeholderTextColor="#888"
          value={hymnId}
          onChangeText={setHymnId}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="نص الترنيمة الجديد"
          placeholderTextColor="#888"
          value={hymnText}
          onChangeText={setHymnText}
          multiline
        />
        <Button title="تعديل" onPress={handleEditHymn} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // ... existing styles ...
});