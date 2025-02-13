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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addcontact = exports.UpdateDTO = exports.CreateTodo = void 0;
const class_validator_1 = require("class-validator");
class CreateTodo {
}
exports.CreateTodo = CreateTodo;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please Provide Your title" }),
    __metadata("design:type", String)
], CreateTodo.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please Provide Your desc" }),
    __metadata("design:type", String)
], CreateTodo.prototype, "desc", void 0);
class UpdateDTO {
}
exports.UpdateDTO = UpdateDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please Provide Your title" }),
    __metadata("design:type", String)
], UpdateDTO.prototype, "title", void 0);
class Addcontact {
}
exports.Addcontact = Addcontact;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please Provide Your name" }),
    __metadata("design:type", String)
], Addcontact.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please Provide Your email" }),
    __metadata("design:type", String)
], Addcontact.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please Enter Your Message" }),
    __metadata("design:type", String)
], Addcontact.prototype, "msg", void 0);
//# sourceMappingURL=todo.dto.js.map