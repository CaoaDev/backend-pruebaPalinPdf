import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidTextService {
  validateText(text: string): string {
    const regex = /^[A-Z]{3}-\d{5}-\d{3}-\d$/;
    const isValid = regex.test(text);
    if (isValid) {
      return 'El dato ha sido procesado correctamente. ¡Felicidades!';
    } else {
      return 'Revise el formato, recuerde tiene que ser de tipo "AAA-23214-767-1"';
    }
  }
}
