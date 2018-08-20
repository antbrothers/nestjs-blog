/*
 * @Author: antbrother 
 * @Date: 2018-08-20 16:37:11 
 * @Last Modified by: antbrother
 * @Last Modified time: 2018-08-20 16:37:53
 */
import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 带有单个路由的基本控制器
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
