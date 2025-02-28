import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import hymnsData from './hymnsData.json';

export default function DeleteHymn({ navigation, route }) {
  const { existingHymns = [], deleteHymn } = route.params || {};
  const [hymnId, setHymnId] = useState('');

  const handleDeleteHymn = () => {
    const hymnNumber = parseInt(hymnId, 10);
    if (!existingHymns.some(hymn => hymn.id === hymnNumber)) {
      Alert.alert('Invalid Hymn ID', 'This hymn ID does not exist.');
      return;
    }
    deleteHymn(hymnNumber);
    navigation.goBack();
  };

  const handleIdChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setHymnId(numericText);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>حذف ترنيمة</Text>
        <TextInput
          style={styles.input}
          placeholder="رقم الترنيمة"
          placeholderTextColor="#888"
          value={hymnId}
          onChangeText={handleIdChange}
          keyboardType="numeric"
        />
        <Button title="حذف" onPress={handleDeleteHymn} />
      </View>
    </TouchableWithoutFeedback>
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