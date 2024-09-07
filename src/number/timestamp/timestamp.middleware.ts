import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response } from 'express';
@Injectable()
export class TimestampMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const timestamp = Date.now().valueOf()
    res.locals.timestamp = timestamp
    console.log(`New request at ${timestamp}`)
    next();
  }
}
