import { Body, Controller, Get, Param, Post, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { Addcontact } from './todo/todo.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private path = join(__dirname,'..','apis','Contact.json');
  private contactdata = JSON.parse(readFileSync(this.path,'utf-8') || '[]');

  @Get('/')
  @Render('index')
  index(@Query('success') success:string){

    return { success }
  }

  @Post('/contact')
  addcontact(@Body()  data:Addcontact,@Res() res:Response){

    const item = {

      id:new Date().getTime(),
      ...data
    }

    this.contactdata.push(item);
    writeFileSync(this.path,JSON.stringify(this.contactdata));

    return res.redirect('/?msg=Data Added Successfully')
  }

  // @Get()
  // getHello() {
  //   return this.appService.getHello();cl
  // }

  @Get('/login')
  Login(){
      
    return {name:"<h1>Weilcome to nest js</h1>"}

  }
}
