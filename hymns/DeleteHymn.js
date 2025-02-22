import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DeleteHymn({ navigation }) {
  const [hymnId, setHymnId] = useState('');

  const handleDeleteHymn = () => {
    // Add your logic to delete the hymn
    console.log('Deleting hymn:', hymnId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>حذف ترنيمة</Text>
      <TextInput
        style={styles.input}
        placeholder="رقم الترنيمة"
        placeholderTextColor="#888"
        value={hymnId}
        onChangeText={setHymnId}
        keyboardType="numeric"
      />
      <Button title="حذف" onPress={handleDeleteHymn} />
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