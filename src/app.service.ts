import { Body, Injectable } from '@nestjs/common';

interface CreateCatDto {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is NestJs';
  }

  createCat(createCatDto: CreateCatDto): CreateCatDto {
    return createCatDto;
  }
}
