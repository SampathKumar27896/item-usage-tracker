import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(userName);
    if (user && user.password === pass) {
      const { userName: result } = user;
      return result;
    }
    return null;
  }
}
