import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `🚀 SmartLink Backend çalışıyor: http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
