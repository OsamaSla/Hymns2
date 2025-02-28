import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import hymnsData from './hymnsData.json';

export default function SearchPage() {
    const [hymns, setHymns] = useState(hymnsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchNumber, setSearchNumber] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHymn, setSelectedHymn] = useState(null);

    const navigation = useNavigation();

    const navigateToAddHymn = () => {
        navigation.navigate('AddHymn', { existingHymns: hymns, addHymn });
    };

    const navigateToDeleteHymn = () => {
        navigation.navigate('DeleteHymn', { existingHymns: hymns, deleteHymn });
    };

    const addHymn = (newHymn) => {
        hymnsData.push(newHymn);
    };

    const deleteHymn = (hymnId) => {
        const index = hymnsData.findIndex(hymn => hymn.id === hymnId);
        if (index > -1) {
            hymnsData.splice(index, 1);
        }
    };

    const handleSearchName = (text) => {
        setSearchTerm(text);
    };

    const handleSearchNumber = (text) => {
        setSearchNumber(text);
    };

    const handleEditHymn = (hymn) => {
        setSelectedHymn(hymn);
        setModalVisible(true);
    };

    const handleSaveHymn = () => {
        // Implement save functionality here
        setModalVisible(false);
        setSelectedHymn(null);
    };

    const sortedHymns = hymns
        .filter(hymn => searchTerm ? hymn.text?.includes(searchTerm) : true) // Added optional chaining
        .filter(hymn => searchNumber ? hymn.id?.toString().includes(searchNumber) : true) // Added optional chaining
        .sort((a, b) => {
            if (sortBy === 'name') {
                return (a.text || '').localeCompare(b.text || ''); // Added nullish coalescing
            } else {
                return (a.id || 0) - (b.id || 0); // Added nullish coalescing
            }
        });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>ابحث عن الترنيمة</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="ابحث عن اسم الترنيمة"
                    placeholderTextColor="#888"
                    value={searchTerm}
                    onChangeText={handleSearchName}
                />
                <TextInput
                    style={styles.numberInput}
                    placeholder="ابحث رقم الترنيمة"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    maxLength={4}
                    value={searchNumber}
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
                        <TouchableOpacity onPress={() => handleEditHymn(item)}>
                            <View style={styles.hymnItem}>
                                <Text style={styles.hymnText}>{item.id} - {item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Button title="Add Hymn" onPress={navigateToAddHymn} />
                <Button title="Delete Hymn" onPress={navigateToDeleteHymn} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>تعديل الترنيمة</Text>
                            {selectedHymn && (
                                <>
                                    <TextInput
                                        style={styles.modalInput}
                                        value={selectedHymn.text}
                                        onChangeText={(text) => setSelectedHymn({ ...selectedHymn, text })}
                                    />
                                    <TextInput
                                        style={[styles.modalInput, styles.modalTextarea]}
                                        value={selectedHymn.content}
                                        onChangeText={(content) => setSelectedHymn({ ...selectedHymn, content })}
                                        multiline
                                    />
                                    <Button title="حفظ" onPress={handleSaveHymn} />
                                    <Button title="إلغاء" onPress={() => setModalVisible(false)} />
                                </>
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
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
    hymnText: {
        textAlign: 'right',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'white',
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    modalInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'right',
    },
    modalTextarea: {
        height: 100,
    },
});
