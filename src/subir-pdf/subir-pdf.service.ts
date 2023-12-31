import { Injectable, BadRequestException } from '@nestjs/common';
import * as pdfParse from 'pdf-parse';

@Injectable()
export class SubirPdfService {
  async parsePdf(buffer: Buffer): Promise<any> {
    try {
      const pdfData = await pdfParse(buffer);
      return pdfData;
    } catch (err) {
      throw new BadRequestException(
        'El PDF no pudo ser procesado verifique que si pdf no este corrupto, tenga imagenes, fuentes privadas, tambien que no este protegido o cifrado',
      );
    }
  }
}
