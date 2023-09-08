import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'

dotenv.config();

const { MONGODB_URL, EXPRESS_PORT } = process.env

const dbConnect = async () => {
  try {
    await connect(MONGODB_URL as string)
    console.log('Connected to database')
  }
  catch (err) {
    console.log(err)
  }
}

dbConnect().catch(err => console.log(err))

const app: express.Application = express()
const port: number = parseInt(EXPRESS_PORT as string) || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app
