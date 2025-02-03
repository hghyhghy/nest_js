import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(name: string): {
        name: string;
    };
    Login(): {
        name: string;
    };
}
