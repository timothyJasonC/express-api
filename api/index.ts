import express, { Application, Request, Response } from 'express'
import router from './route'
const app: Application = express()
const PORT = 8000

app.use(express.json())

app.get('/', (req:Request, res:Response) => {
    res.send('test')
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`server started on  http://localhost:${PORT}/api`);
})


