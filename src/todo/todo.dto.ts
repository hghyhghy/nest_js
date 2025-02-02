
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateTodo{
    
    @IsNotEmpty({message:"Please Provide Your title"})
    title:string

    @IsNotEmpty({message:"Please Provide Your desc"})
    desc:string
}

export class UpdateDTO{

    @IsNotEmpty({message:"Please Provide Your title"})
    title:string
}