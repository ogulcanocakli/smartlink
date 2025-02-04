import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [AuthModule, LinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
