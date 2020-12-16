import { Sequelize } from 'sequelize'
import config from '../config'

const { DB_NAME, DB_USER, DB_PASSWORD } = config

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
})
