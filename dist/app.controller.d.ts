import { AppService } from './app.service';
import { Addcontact } from './todo/todo.dto';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private path;
    private contactdata;
    index(success: string): {
        success: string;
    };
    addcontact(data: Addcontact, res: Response): void;
    Login(): {
        name: string;
    };
}
