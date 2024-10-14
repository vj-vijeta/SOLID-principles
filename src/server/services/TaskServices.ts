// TaskService.ts
import { Task } from '../models/Task';
import { TaskRepository } from '../repositories/TaskRepository';

interface CreateTaskService {
    createTask(title: string, description: string): void;
}

interface FetchTaskService {
    getAllTasks(): Task[];
}

export class TaskService implements CreateTaskService, FetchTaskService {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    createTask(title: string, description: string): void {
        const newTask = new Task(title, description);
        this.taskRepository.addTask(newTask);
    }

    getAllTasks(): Task[] {
        return this.taskRepository.getTasks();
    }
}
