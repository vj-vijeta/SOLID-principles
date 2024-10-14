// src/client/models/Task.ts  (Base class)
export class Task {
    constructor(public title: string, public description: string) {}

    display(): string {
        return `${this.title}: ${this.description}`;
    }
}
