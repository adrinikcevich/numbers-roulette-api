import { Controller, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('number')
export class NumberController {
  @Post()
  getRandomNumber(@Res() res: Response) {
    let n = Math.floor(Math.random() * 101);
    
    res.status(200).json({ value: n });
  }
}
