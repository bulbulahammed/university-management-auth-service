import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

// usr cors
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hi this is University Server✌')
})

export default app
