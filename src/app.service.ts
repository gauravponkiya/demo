import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){
    console.log("Created Service constructore")
  }
  getHello(): string {
    return 'Hello World!';
  }
}
