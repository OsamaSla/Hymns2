import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditHymn({ navigation }) {
  const [hymnId, setHymnId] = useState('');
  const [hymnText, setHymnText] = useState('');

  const handleEditHymn = () => {
    // Add your logic to edit the hymn
    console.log('Editing hymn:', hymnId, 'New text:', hymnText);
    navigation.goBack();
  };

  return (
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
      />
      <Button title="تعديل" onPress={handleEditHymn} />
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