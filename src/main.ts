import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // this will create a new web server
  // instance based on our AppModule.
  // the server process will "listen"
  // at port "3000"
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
