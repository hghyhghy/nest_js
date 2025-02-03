"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const todo_dto_1 = require("./todo.dto");
const todo_pipe_1 = require("./todo.pipe");
let TodoController = class TodoController {
    constructor(todoservice) {
        this.todoservice = todoservice;
        this.todos = [];
    }
    createtodo() {
        return this.todoservice.createtodo();
    }
    createtodo3(data) {
        const item = {
            id: new Date().getTime(),
            ...data,
            createdAt: new Date().toLocaleString(),
            isCompleted: false
        };
        this.todos.push(item);
        return {
            msg: "Todo is created"
        };
    }
    gettodo() {
        return {
            todos: this.todos,
            total: this.todos.length,
            msg: "Todo is created"
        };
    }
    getUser1(data, sea) {
        return { data: JSON.stringify(data), sea };
    }
    getuser(id) {
        return { id };
    }
    updatetodo(id, data) {
        const new_todo = this.todos.map((curr, i) => {
            if (curr.id == id) {
                return {
                    ...curr,
                    ['title']: data.title,
                    isCompleted: true
                };
            }
            return curr;
        });
        this.todos = new_todo;
        return {
            msg: "Todos are updated "
        };
    }
    deletetodo(id) {
        const todoId = Number(id);
        const new_todo = this.todos.filter((c) => c.id !== todoId);
        this.todos = new_todo;
        return { msg: "Todo is deleted" };
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)('/create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "createtodo", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.CreateTodo]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "createtodo3", null);
__decorate([
    (0, common_1.Get)('/get-todo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "gettodo", null);
__decorate([
    (0, common_1.Get)('/usertodo/:id/:slug'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getUser1", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, common_1.UsePipes)(todo_pipe_1.TodoPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getuser", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, todo_dto_1.UpdateDTO]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updatetodo", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deletetodo", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map