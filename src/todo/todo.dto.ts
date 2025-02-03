
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

export class Addcontact{

    @IsNotEmpty({message:"Please Provide Your name"})
    name:string
    
    @IsEmail()
    @IsNotEmpty({message:"Please Provide Your email"})
    email:string
    
    @IsNotEmpty({message:"Please Enter Your Message"})
    msg:string
}