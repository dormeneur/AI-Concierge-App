import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
    return (
        <View style={styles.item}>
            <Text>{task.description} - {task.due_date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default TaskItem;