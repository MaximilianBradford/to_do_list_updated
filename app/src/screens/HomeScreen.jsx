import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { name: 'Do laundry', completed: false },
        { name: 'Go to gym', completed: false },
        { name: 'Walk dog', completed: false },
    ]);

    const addTask = (taskText) => {
        if (taskText.trim()) {
            setTasks([...tasks, { name: taskText, completed: false }]);
        }
    };

    return (
        <MainLayout>
            <View style={styles.container}>
                <ToDoForm addTask={addTask} />
                <ToDoList tasks={tasks} />
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;