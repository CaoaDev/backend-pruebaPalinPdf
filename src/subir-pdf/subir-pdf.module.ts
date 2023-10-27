import { Module } from '@nestjs/common';
import { SubirPdfService } from './subir-pdf.service';
import { SubirPdfController } from './subir-pdf.controller';

@Module({
  providers: [SubirPdfService],
  controllers: [SubirPdfController],
})
export class SubirPdfModule {}
