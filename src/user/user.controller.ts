import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // GET route to return dummy JSON
  @Get()
  getDummyUsers() {
    return this.userService.getDummyUsers();
  }

  // POST route to add a user
  @Post()
  addUser(@Body() createUserDto: { name: string; email: string }) {
    return this.userService.addUser(createUserDto);
  }
}
