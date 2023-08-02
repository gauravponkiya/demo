import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { ValidationPipe } from "./cats.pipe";
import { LoggingMiddleware } from "./Middlewares/LoggingMiddleware";

@Module({
    controllers:[CatsController],
    providers:[CatsService,ValidationPipe,LoggingMiddleware]
})
export class CatsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggingMiddleware)
        .forRoutes(CatsController);
    }
}