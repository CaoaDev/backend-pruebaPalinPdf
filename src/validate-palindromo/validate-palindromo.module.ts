import { Module } from '@nestjs/common';
import { ValidatePalindromoController } from './validate-palindromo.controller';
import { ValidatePalindromoService } from './validate-palindromo.service';

@Module({
  controllers: [ValidatePalindromoController],
  providers: [ValidatePalindromoService],
})
export class ValidatePalindromoModule {}
