import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidatePalindromoService } from './validate-palindromo/validate-palindromo.service';
import { ValidatePalindromoModule } from './validate-palindromo/validate-palindromo.module';
import { SubirPdfModule } from './subir-pdf/subir-pdf.module';

@Module({
  imports: [ValidatePalindromoModule, SubirPdfModule],
  controllers: [AppController],
  providers: [AppService, ValidatePalindromoService],
})
export class AppModule {}
