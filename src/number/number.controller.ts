import { Controller } from '@nestjs/common';

@Controller('number')
export class NumberController {
    getRandomNumber(){
        return 'numero random'
    }
}
