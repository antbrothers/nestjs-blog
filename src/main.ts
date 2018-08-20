/*
 * @Author: antbrother 
 * @Date: 2018-08-20 16:33:32 
 * @Last Modified by: antbrother
 * @Last Modified time: 2018-08-20 16:34:23
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 应用程序入口文件，使用NestFactory创建nest应用实例
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
