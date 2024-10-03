import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';

const DashboardScreen = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from API
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <TaskList tasks={tasks} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});

export default DashboardScreen;