import { Task } from './Task';
import { TaskList } from './TaskList';

let list: TaskList = new TaskList();

list.addTask(new Task("walk the dog"));
list.addTask(new Task("mow lawn", true));

let newTask: Task = new Task("water garden");
list.addTask(newTask);

list.printTaskList();