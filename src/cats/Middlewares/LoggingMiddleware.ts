import { NestMiddleware,Injectable } from "@nestjs/common";

@Injectable()
export class LoggingMiddleware implements NestMiddleware{
    use(req: any, res: any, next: () => void) {
        console.log('Request...',`${req.method}:${req.url}`,req.params,req.query);
        next();
    }
}