import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreetingByName(name: string): string {
    return `{Welcome to Nestjs ${name}!..}`;
  }
}
