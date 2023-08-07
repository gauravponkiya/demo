import { Body, Controller, Get,Headers, Param, Post } from "@nestjs/common";
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

  @Post(':id/copy')
  async copy(@Body() body: any,@Param('id') id:string) {
   return this.catsService.copyAndMove(body);
  }
  @Post(':id/move')
  async move(@Body() body: any ,@Param('id') id:string) {
   return  this.catsService.copyAndMove(body);
  }
}