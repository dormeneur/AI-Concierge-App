import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <li>
            {task.description} - {task.due_date}
        </li>
    );
};

export default TaskItem;