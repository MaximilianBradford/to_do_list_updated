import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

// Keep navigation as a full prop
const AboutScreen = ({ navigation }) => {

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text>To Do List Application</Text>
                <Text> Created by Max Bradford</Text>
                <Text>Version 1.5</Text>
                <Text> Created 11-27-2024</Text>
                <Button
                    title="Go to To Do List"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AboutScreen;