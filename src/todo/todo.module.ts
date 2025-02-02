import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({})
export class TodoModule implements NestModule {

    configure(consumer:MiddlewareConsumer) {
//    applying the middleware 

    consumer.apply(AuthMiddleware)
    .forRoutes('todo/get-todo')
    }
}
