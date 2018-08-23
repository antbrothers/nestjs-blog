import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';

/**
 * 在module的配置文件里配置controller 和service
 */
@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}