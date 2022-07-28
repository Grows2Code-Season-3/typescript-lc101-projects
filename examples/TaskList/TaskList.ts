import { Task } from './Task';

export class TaskList {

  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  printTaskList() {
    let output = "My Tasks:\n";

    for (let i: number = 0; i < this.tasks.length; i++) {
      let theTask: Task = this.tasks[i];

      if (theTask.isComplete) {
        output += "X - ";
      } else {
        output += "_ - ";
      }

      output += `${theTask.name}\n`;
    }

    console.log(output);
  }

}