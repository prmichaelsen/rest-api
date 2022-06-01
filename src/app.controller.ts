import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user/user.inteface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): User[] {
    return [{
      "username": "jarol"
    }];
  }
}
