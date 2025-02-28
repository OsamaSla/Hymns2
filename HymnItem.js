import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HymnItem({ hymn }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { hymn })}>
            <View>
                <Text>{hymn.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
