import { Body, Controller, Post } from '@nestjs/common';
import { ValidatePalindromoService } from './validate-palindromo.service';

@Controller('validate-palindromo')
export class ValidatePalindromoController {
  constructor(private validatePalindromoService: ValidatePalindromoService) {}

  @Post()
  validate(@Body() data: any) {
    console.log(data);
    if (typeof data.data === 'string') {
      return this.validatePalindromoService.validateString(data.data);
    } else if (typeof data.data === 'number' && !isNaN(data.data)) {
      return this.validatePalindromoService.validateNumber(data.data);
    } else {
      return 'El valor recibido no es un string ni un número válido';
    }
  }
}
