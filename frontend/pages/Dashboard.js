import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from API
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;