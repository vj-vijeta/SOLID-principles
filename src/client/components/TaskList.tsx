// src/client/components/TaskList.tsx (SRP - displays tasks)
import React from 'react';
import { Task } from '../models/Task';

interface TaskListProps {
    tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.display()}</li>
            ))}
        </ul>
    );
};
