// src/modules/your-module/controllers/your-controller.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ValidTextService } from './valid-text.service';

@Controller('validText')
export class ValidTextController {
  constructor(private readonly validTextService: ValidTextService) {}

  @Post()
  async validateText(@Body('text') text: string): Promise<string> {
    return this.validTextService.validateText(text);
  }
}
