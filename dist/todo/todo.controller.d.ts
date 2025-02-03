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
    getUser1(data: any, sea: string): {
        data: string;
        sea: string;
    };
    getuser(id: number): {
        id: number;
    };
    updatetodo(id: number, data: UpdateDTO): {
        msg: string;
    };
    deletetodo(id: string): {
        msg: string;
    };
}
