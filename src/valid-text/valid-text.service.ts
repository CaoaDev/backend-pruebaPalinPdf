import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidTextService {
  validateText(text: string): string {
    const regex = /^[A-Z]{3}-\d{5}-\d{3}-\d$/;
    const isValid = regex.test(text);
    if (isValid) {
      return 'Su PDF ha sido procesado correctamente. ¡Felicidades!';
    } else {
      return 'Revise su PDF, que no esté cifrado, que no contenga imágenes y que la fuente del texto no sea privada.';
    }
  }
}
