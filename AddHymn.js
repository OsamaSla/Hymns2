import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddHymn({ navigation }) {
  const [hymnText, setHymnText] = useState('');

  const handleAddHymn = () => {
    // Add your logic to add the hymn
    console.log('Adding hymn:', hymnText);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إضافة ترنيمة</Text>
      <TextInput
        style={styles.input}
        placeholder="نص الترنيمة"
        placeholderTextColor="#888"
        value={hymnText}
        onChangeText={setHymnText}
      />
      <Button title="إضافة" onPress={handleAddHymn} />
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