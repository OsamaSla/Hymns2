import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EditPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تعديل</Text>
      <Button title="إضافة ترنيمة" onPress={() => navigation.navigate('AddHymn')} />
      <Button title="إضافة ترجمة" onPress={() => navigation.navigate('AddTranslation')} />
      <Button title="تعديل ترنيمة" onPress={() => navigation.navigate('EditHymn')} />
      <Button title="حذف ترنيمة" onPress={() => navigation.navigate('DeleteHymn')} />
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
});