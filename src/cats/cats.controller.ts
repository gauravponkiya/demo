import { Body, Controller, Get,Headers, Post } from "@nestjs/common";
import { Cat } from "./cats.dto";
import { CatsService } from "./cats.service";
import { ApiTags } from "@nestjs/swagger";
import { ValidationPipe } from "./cats.pipe";

@ApiTags('cats')
@Controller('documents')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('search')
  async findAll(@Headers('token-id')apiKey:string): Promise<any> {
    console.log(apiKey);
    return this.catsService.findAll();
  }

  @Post()
  async addCat(@Body(new ValidationPipe()) cat: Cat) {
    this.catsService.create(cat);
  }
}