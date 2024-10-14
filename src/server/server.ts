// server.ts
import express from 'express';
import { TaskController } from './controllers/TaskController';
import { TaskService } from './services/TaskServices';
import { TaskRepository } from './repositories/TaskRepository';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Instantiate TaskRepository, TaskService, and TaskController
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// Define routes
app.get('/tasks', taskController.getTasks);
app.post('/tasks', taskController.createTask);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
