// src/client/components/TaskManager.tsx   (SRP - manages task state and form
import React, { useState } from 'react';
import { TaskList } from './TaskList';
import { Task } from '../models/Task'; // Import the Task class

export const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        new Task('Task 1', 'Learn SOLID principles'),
        new Task('Task 2', 'Fix bugs')
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Function to handle adding a new task
    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && description) {
            const newTask = new Task(title, description);
            setTasks([...tasks, newTask]); // Add the new task to the list
            setTitle(''); // Reset input fields
            setDescription('');
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            {/* Task List */}
            <TaskList tasks={tasks} />

            {/* Task Form for Adding New Tasks */}
            <form onSubmit={addTask}>
                <div>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};
