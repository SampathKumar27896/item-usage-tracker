import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(userName);
    if (user && user.password === pass) {
      const result = {
        userId: user.userId,
        userName: user.userName,
      };
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.userName,
      sub: { userId: user.userId, role: 1 },
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
