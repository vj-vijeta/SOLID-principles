// TaskController.ts
import { Request, Response } from 'express';
import { TaskService } from '../services/TaskServices';

export class TaskController {
    private taskService: TaskService;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }

    getTasks = (req: Request, res: Response): void => {
        const tasks = this.taskService.getAllTasks();
        res.json(tasks);
    };

    createTask = (req: Request, res: Response): void => {
        const { title, description } = req.body;
        this.taskService.createTask(title, description);
        res.status(201).send('Task created');
    };
}
