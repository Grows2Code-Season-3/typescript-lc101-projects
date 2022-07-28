"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(name, isComplete) {
        if (isComplete === void 0) { isComplete = false; }
        this.name = name;
        this.isComplete = isComplete;
    }
    return Task;
}());
exports.Task = Task;
