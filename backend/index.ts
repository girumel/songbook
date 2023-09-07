import express from 'express'

const app: express.Application = express()
const port: number = 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export default app
