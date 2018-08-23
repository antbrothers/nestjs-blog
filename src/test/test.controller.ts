import { Get, Controller } from '@nestjs/common';
import { TestService } from './test.service';
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  firstTest(): string {
    return this.testService.test();
  }

  @Get(':id')
  findOneTest(): string {
    return this.testService.findOneTest()
  }
}
