import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function AddTranslation({ navigation }) {
  const [hymnId, setHymnId] = useState('');
  const [translationText, setTranslationText] = useState('');
  const [language, setLanguage] = useState('');

  const handleAddTranslation = () => {
    // Add your logic to add the translation
    console.log('Adding translation for hymn:', hymnId, 'Language:', language, 'Text:', translationText);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>إضافة ترجمة</Text>
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
          placeholder="اللغة (ENG or DE)"
          placeholderTextColor="#888"
          value={language}
          onChangeText={setLanguage}
        />
        <TextInput
          style={styles.input}
          placeholder="نص الترجمة"
          placeholderTextColor="#888"
          value={translationText}
          onChangeText={setTranslationText}
          multiline
        />
        <Button title="إضافة" onPress={handleAddTranslation} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // ... existing styles ...
});