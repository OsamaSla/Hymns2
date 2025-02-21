import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
      />
      <Button title="إضافة" onPress={handleAddTranslation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
});