import { Body, Controller, Get, Header, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';

interface CreateCatDto {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // ? Calling a provider
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  // ? Post Controller
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  // ? Post Controller with Headers
  @Post()
  @Header('Cache-Control', 'none')
  createWithHead() {
    return 'This action adds a new cat';
  }

  // ? Overriding args passed
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // ? With Params
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.appService.createCat(createCatDto);
  }
}
