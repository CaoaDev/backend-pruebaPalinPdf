import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidatePalindromoService {
  validateString(text: string): string {
    // Convierte el texto a minúsculas
    const lowerText = text.toLowerCase();

    // Elimina cualquier caracter que no sea alfanumérico
    const ediText = lowerText.replace(/\W/g, '');

    // Invirtiendo el texto limpio
    const reversedText = ediText.split('').reverse().join('');

    // Compara el texto limpio con el invertido
    if (ediText === reversedText) {
      return `El texto, ${text} si es un palíndromo`;
    } else {
      return `El texto, ${text} nada que ver con un palindromo`;
    }
  }

  validateNumber(number: number): string {
    // Inicializa una variable para almacenar el número invertido
    let reversed = 0;

    // Almacena el valor original del número
    const originalNumber = number;

    // Inicia un bucle mientras el número sea mayor que 0
    while (number > 0) {
      // Invierte el número multiplicándolo por 10 y sumando el último dígito
      reversed = reversed * 10 + (number % 10);

      // Elimina el último dígito del número
      number = Math.floor(number / 10);
    }

    // Compara el número invertido con el original
    if (reversed == originalNumber) {
      return `El número, ${originalNumber} si es un palíndromo`;
    } else {
      return `El número, ${originalNumber} nada que ver con un palíndromo`;
    }
  }
}
