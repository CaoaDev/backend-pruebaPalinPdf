import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SubirPdfService } from './subir-pdf.service';

@Controller('subir-pdf')
export class SubirPdfController {
  constructor(private readonly subirPdfService: SubirPdfService) {}

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<string> {
    try {
      const pdfData = await this.subirPdfService.parsePdf(file.buffer);
      return pdfData.text;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
