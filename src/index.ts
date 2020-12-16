import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { sequelize } from './db'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// test
app.get('/', (_req, res) => {
  return res.status(200).json({ status: 'OK' })
})

async function start() {
  try {
    //await sequelize.sync({ force: true });
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log('server starter')
    })
  } catch (e) {
    console.error(e.message)
  }
}

start()
