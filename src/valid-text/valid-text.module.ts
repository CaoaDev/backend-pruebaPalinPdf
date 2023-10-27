import { Module } from '@nestjs/common';
import { ValidTextService } from './valid-text.service';
import { ValidTextController } from './valid-text.controller';

@Module({
  providers: [ValidTextService],
  controllers: [ValidTextController],
})
export class ValidTextModule {}
