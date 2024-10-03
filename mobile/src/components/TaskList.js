import React from 'react';
import { FlatList, Text, View } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem task={item} />}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default TaskList;