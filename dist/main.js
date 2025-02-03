"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const hbs = require("hbs");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials(path.join(__dirname, '..', 'views', 'partial'));
    await app.listen(3000);
    console.log(`Server is running on http://localhost:3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map