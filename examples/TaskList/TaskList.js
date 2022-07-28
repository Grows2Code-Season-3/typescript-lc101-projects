"use strict";
exports.__esModule = true;
exports.TaskList = void 0;
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskList.prototype.printTaskList = function () {
        var output = "My Tasks:\n";
        for (var i = 0; i < this.tasks.length; i++) {
            var theTask = this.tasks[i];
            if (theTask.isComplete) {
                output += "X - ";
            }
            else {
                output += "_ - ";
            }
            output += "".concat(theTask.name, "\n");
        }
        console.log(output);
    };
    return TaskList;
}());
exports.TaskList = TaskList;
