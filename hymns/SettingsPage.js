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
      <Text style={styles.title}>الإعدادات</Text>
      <View style={styles.section}>
        <Text style={styles.label}>اختر الخط</Text>
        <Picker
          selectedValue={selectedFont}
          style={styles.picker}
          onValueChange={handleFontChange}
        >
          <Picker.Item label="الخط الافتراضي" value="default" />
          <Picker.Item label="Amiri" value="amiri" />
          <Picker.Item label="Scheherazade" value="scheherazade" />
          <Picker.Item label="Noto Naskh Arabic" value="noto-naskh-arabic" />
          <Picker.Item label="Cairo" value="cairo" />
        </Picker>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  fontSizeValue: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});