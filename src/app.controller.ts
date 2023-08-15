import { Controller, Get, Optional, Inject } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('/playground/greeting')
export class AppController {
  @Optional() @Inject('DEFAULT_NAME') private name;
  constructor(private readonly appService: AppService) {}

  @Get()
  getGreeting(): string {
    console.log(this.name);
    this.name = 'Sam';
    return this.appService.getGreetingByName(this.name);
  }
}
