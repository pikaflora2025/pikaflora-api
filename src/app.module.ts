import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { getConfigModuleOptions } from './config/env.config';

@Module({
  imports: [ConfigModule.forRoot(getConfigModuleOptions()), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
