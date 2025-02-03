import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user/:name')
  @Render('index')
  index(@Param('name') name:string){

    return { name}
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
