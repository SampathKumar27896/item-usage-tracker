import {
  Controller,
  Get,
  Post,
  Optional,
  Inject,
  UseGuards,
  //BadRequestException,
  //HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Request } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('/playground/greeting')
export class AppController {
  @Optional() @Inject('DEFAULT_NAME') private name;
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getGreeting(): string {
    // throw new BadRequestException('Bad Request', {
    //   cause: new Error(),
    //   description: 'some sampath',
    // });
    console.log(this.name);
    this.name = 'Sam';
    return this.appService.getGreetingByName(this.name);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
