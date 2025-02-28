import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EditPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('AddHymn')}
        >
          <Text style={styles.buttonText}>إضافة ترنيمة</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('AddTranslation')}
        >
          <Text style={styles.buttonText}>إضافة ترجمة</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EditHymn')}
        >
          <Text style={styles.buttonText}>تعديل ترنيمة</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('DeleteHymn')}
        >
          <Text style={styles.buttonText}>حذف ترنيمة</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'stretch',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});