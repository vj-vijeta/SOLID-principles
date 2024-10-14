// TaskRepository.ts
import { Task } from '../models/Task';

interface ITaskRepository {
    getTasks(): Task[];
    addTask(task: Task): void;
}

export class TaskRepository implements ITaskRepository {
    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }
}
