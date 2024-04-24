import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: "Jane",
      lastName: "do",
      age: 20
    },
    {
      id: 2,
      name: "Jhon",
      lastName: "doe",
      age: 22
    }
  ]

  create(user: CreateUserDto) {
    this.users.push(user)
    return {
      ...user,
      id: this.users.length + 1
    }
  }

  findAll() {
    return this.users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
