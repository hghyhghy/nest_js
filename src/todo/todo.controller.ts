
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodo, UpdateDTO } from './todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoservice:TodoService){}

    private todos: { id: number; title: string; desc: string; createdAt: string; isCompleted: boolean }[] = []

    @Get('/create')
    createtodo(){

        return this.todoservice.createtodo();

        
    }

    @Post('/create')
    // data validation
    createtodo3( @Body() data:CreateTodo){

        const item = {

            id:new Date().getTime(),
            ...data,
            createdAt:new Date().toLocaleString(),
            isCompleted:false
        }

        this.todos.push(item)

        return {

            msg:"Todo is created"
        }

    }

    @Get('/get-todo')
    gettodo(){

        return {
            todos:this.todos,
            total:this.todos.length,
            msg:"Todo is created"
        }

    }

    @Put('/update/:id')
    updatetodo(@Param('id') id:number , @Body() data:UpdateDTO ){

        const new_todo= this.todos.map((curr,i) => {

            if (curr.id == id){

                return {

                    ...curr,
                    ['title'] : data.title,
                    isCompleted:true
                }
            }

            return curr
        })

        this.todos =  new_todo

        return {
            msg:"Todos are updated "
        }
    }

    @Delete('/delete/:id')
    deletetodo(@Param('id') id: string) {  // ✅ Accept id as string
        const todoId = Number(id);  // ✅ Convert id to number
    
        const new_todo= this.todos.filter((c) => c.id !== todoId);
        this.todos=new_todo
    
        return { msg: "Todo is deleted" };
    }
    

}
