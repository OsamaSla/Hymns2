import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
    const { hymn } = route.params;

    return (
        <View>
            <Text>{hymn.title}</Text>
            {hymn.lyrics.map((line, index) => (
                <Text key={index}>{line}</Text>
            ))}
        </View>
    );
}
