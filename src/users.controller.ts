import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  @Get()
  @Roles(['ADMIN'])
  @UseGuards(RolesGuard)
  getUser() {
    return { username: 'sumeet' };
  }

  @Get('test')
  getUserTest() {
    return {
      username: 'test',
    };
  }
}
