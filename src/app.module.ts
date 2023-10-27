import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidatePalindromoService } from './validate-palindromo/validate-palindromo.service';
import { ValidatePalindromoModule } from './validate-palindromo/validate-palindromo.module';
import { SubirPdfModule } from './subir-pdf/subir-pdf.module';
import { ValidTextModule } from './valid-text/valid-text.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

@Module({
  imports: [ValidatePalindromoModule, SubirPdfModule, ValidTextModule],

  controllers: [AppController],

  providers: [
    AppService,

    ValidatePalindromoService,

    {
      provide: AllExceptionsFilter,

      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
