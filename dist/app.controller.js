"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const path_1 = require("path");
const fs_1 = require("fs");
const todo_dto_1 = require("./todo/todo.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.path = (0, path_1.join)(__dirname, '..', 'apis', 'Contact.json');
        this.contactdata = JSON.parse((0, fs_1.readFileSync)(this.path, 'utf-8') || '[]');
    }
    index(success) {
        return { success };
    }
    addcontact(data, res) {
        const item = {
            id: new Date().getTime(),
            ...data
        };
        this.contactdata.push(item);
        (0, fs_1.writeFileSync)(this.path, JSON.stringify(this.contactdata));
        return res.redirect('/?msg=Data Added Successfully');
    }
    Login() {
        return { name: "<h1>Weilcome to nest js</h1>" };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Query)('success')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('/contact'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.Addcontact, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addcontact", null);
__decorate([
    (0, common_1.Get)('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "Login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map