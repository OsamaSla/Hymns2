import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function SearchPage() {
  const [hymns, setHymns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name' or 'number'

  useEffect(() => {
    fetchHymns();
  }, []);

  const fetchHymns = async () => {
    const response = await axios.get('http://localhost:3001/api/hymns');
    setHymns(response.data);
  };

  const handleSearchName = (text) => {
    setSearchTerm(text);
  };

  const handleSearchNumber = (text) => {
    setSearchNumber(text);
  };

  const sortedHymns = hymns
    .filter(hymn => searchTerm ? hymn.text.includes(searchTerm) : true)
    .filter(hymn => searchNumber ? hymn.id.toString().includes(searchNumber) : true)
    .sort((a, b) => sortBy === 'name' ? a.text.localeCompare(b.text) : a.id - b.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ابحث عن الترنيمة</Text>
      <TextInput
        style={styles.nameInput}
        placeholder="ابحث عن اسم الترنيمة"
        placeholderTextColor="#888"
        onChangeText={handleSearchName}
      />
      <TextInput
        style={styles.numberInput}
        placeholder="ابحث رقم الترنيمة"
        placeholderTextColor="#888"
        keyboardType="numeric"
        maxLength={4}
        onChangeText={handleSearchNumber}
      />
      <View style={styles.sortButtons}>
        <Button title="ترتيب أبجدي" onPress={() => setSortBy('name')} />
        <Button title="ترتيب حسب الرقم" onPress={() => setSortBy('number')} />
      </View>
      <FlatList
        data={sortedHymns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.hymnItem}>
            <Text>{item.id} - {item.text}</Text>
          </View>
        )}
      />
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
  nameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'right',
    width: '80%',
    alignSelf: 'flex-end',
  },
  numberInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'right',
    width: '40%',
    alignSelf: 'flex-end',
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  hymnItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});