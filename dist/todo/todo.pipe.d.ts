import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class TodoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
