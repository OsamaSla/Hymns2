import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import hymnsData from './hymnsData.json';

export default function AddHymn({ route, navigation }) {
    const [newHymnText, setNewHymnText] = useState('');
    const [newHymnContent, setNewHymnContent] = useState('');

    const handleAddHymn = () => {
        const newHymn = {
            id: hymnsData.length > 0 ? hymnsData[hymnsData.length - 1].id + 1 : 1,
            text: newHymnText,
            content: newHymnContent,
        };
        const addHymn = (newHymn) => {
            hymnsData.push(newHymn);
        };
        addHymn(newHymn);
        navigation.navigate('SearchPage', { addHymn });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>إضافة ترنيمة جديدة</Text>
                <TextInput
                    style={styles.input}
                    placeholder="اسم الترنيمة"
                    value={newHymnText}
                    onChangeText={setNewHymnText}
                />
                <TextInput
                    style={[styles.input, styles.textarea]}
                    placeholder="محتوى الترنيمة"
                    value={newHymnContent}
                    onChangeText={setNewHymnContent}
                    multiline
                />
                <Button title="إضافة" onPress={handleAddHymn} />
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
        width: '100%',
    },
    textarea: {
        height: 100,
    },
});
