import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { NumberController } from './number.controller';
import { TimestampMiddleware } from './timestamp/timestamp.middleware';
@Module({
    controllers:[NumberController]
})
export class NumberModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TimestampMiddleware).forRoutes({path:'/number',method:RequestMethod.POST})
    }
}
