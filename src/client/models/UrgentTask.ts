// UrgentTask.ts  (Extends Task for urgent tasks)
import { Task } from './Task';

export class UrgentTask extends Task {
    private urgencyLevel: number;

    constructor(title: string, description: string, urgencyLevel: number) {
        super(title, description);
        this.urgencyLevel = urgencyLevel;
    }

    display(): string {
        return `[Urgent] ${this.title} (Urgency Level: ${this.urgencyLevel})`;
    }
}
