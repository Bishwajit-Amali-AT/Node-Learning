import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node_project', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // true if you want SQL logs
});

export default sequelize;
