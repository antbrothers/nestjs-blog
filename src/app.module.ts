/*
 * @Author: antbrother 
 * @Date: 2018-08-20 16:36:15 
 * @Last Modified by: antbrother
 * @Last Modified time: 2018-08-20 16:36:42
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * 定义AppModule应用程序的模块
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}