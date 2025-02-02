import { TodoService } from './todo.service';
import { CreateTodo, UpdateDTO } from './todo.dto';
export declare class TodoController {
    private todoservice;
    constructor(todoservice: TodoService);
    private todos;
    createtodo(): {
        name: string;
    };
    createtodo3(data: CreateTodo): {
        msg: string;
    };
    gettodo(): {
        todos: {
            id: number;
            title: string;
            desc: string;
            createdAt: string;
            isCompleted: boolean;
        }[];
        total: number;
        msg: string;
    };
    updatetodo(id: number, data: UpdateDTO): {
        msg: string;
    };
    deletetodo(id: string): {
        msg: string;
    };
}
