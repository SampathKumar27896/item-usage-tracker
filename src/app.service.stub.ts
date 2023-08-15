import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceMock {
  getGreetingByName(name: string): string {
    return `{Welcome to Nestjs ${name}!..(It's a stub response)}`;
  }
}
