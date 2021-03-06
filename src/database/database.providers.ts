import { Sequelize } from 'sequelize-typescript'
import { Cat } from '../cats/cat.entity';
/**
 * 链接数据库
 */
export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Admin~123456',
        database: 'blog',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    }
  }
]