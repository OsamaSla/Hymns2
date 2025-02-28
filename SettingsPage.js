import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function SettingsPage({ toggleTheme, changeFont, changeFontSize }) {
  const [selectedFont, setSelectedFont] = React.useState('default');
  const [fontSize, setFontSize] = React.useState(16);

  const handleFontChange = (itemValue) => {
    setSelectedFont(itemValue);
    changeFont(itemValue);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
    changeFontSize(value);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>إعدادات</Text>

      {/* Font Selection Section */}
      <View style={styles.section}>
        <Text style={styles.label}>اختر الخط</Text>
        <Picker
          selectedValue={selectedFont}
          style={styles.picker}
          onValueChange={handleFontChange}
        >
          <Picker.Item label="Amiri" value="amiri" color="#000" />
          <Picker.Item label="Scheherazade" value="scheherazade" color="#000" />
          <Picker.Item label="Noto Naskh Arabic" value="noto-naskh-arabic" color="#000" />
          <Picker.Item label="Cairo" value="cairo" color="#000" />
        </Picker>
      </View>

      {/* Font Size Section */}
      <View style={styles.section}>
        <Text style={styles.label}>حجم الخط</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={30}
          value={fontSize}
          onValueChange={handleFontSizeChange}
          step={1}
        />
        <Text style={styles.fontSizeValue}>{fontSize}</Text>
      </View>

      {/* Theme Toggle Section */}
      <View style={styles.section}>
        <Text style={styles.label}>اختر وضع الشاشة</Text>
        <Button title="الوضع الداكن / الوضع الفاتح" onPress={toggleTheme} />
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
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20, // Reduced marginBottom
  },
  label: {
    fontSize: 18,
    marginBottom: 5, // Reduced marginBottom to close the gap
    textAlign: 'right', // Align text to the right for RTL
    color: '#000', // Darker color for label
  },
  picker: {
    height: 150, // Adjusted height
    width: '100%',
    marginTop: 0, // Removed marginTop to close the gap
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40, // Increased height
  },
  fontSizeValue: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 24,
    color: '#000', // Darker color for font size value
  },
});