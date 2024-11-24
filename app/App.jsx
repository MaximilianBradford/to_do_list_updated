/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
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
    <SafeAreaView style={styles.container}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
