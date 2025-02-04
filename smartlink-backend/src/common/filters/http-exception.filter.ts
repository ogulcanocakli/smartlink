import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      // NestJS tarafından oluşturulan hata
      return response
        .status(exception.getStatus())
        .json(exception.getResponse());
    } else {
      // Beklenmeyen hataları yönet
      console.error('❌ Beklenmeyen Hata:', exception);
      return response.status(500).json({
        statusCode: 500,
        message: 'Bilinmeyen bir sunucu hatası oluştu.',
        error: 'Internal Server Error',
      });
    }
  }
}
