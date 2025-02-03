import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set the views directory
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Correctly register the partials directory
  hbs.registerPartials(path.join(__dirname, '..', 'views', 'partial'));

  await app.listen(3000);
  console.log(`Server is running on http://localhost:3000`);
}
bootstrap();
