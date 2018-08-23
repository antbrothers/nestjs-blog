# nestjs-blog

## Description

使用nestjs 构建一个node mvc 项目 测试

## Mysql8 连接提示 Client does not support authentication protocol requested by server; consider upgrading MySQL client 解决方法
 USE mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'XXXXXX';
FLUSH PRIVILEGES;

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

