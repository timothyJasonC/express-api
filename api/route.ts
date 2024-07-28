import { Router, Request, Response } from "express";
import { testRouter } from "./routers/test.router";


const router = Router()

router.get('/' ,(req:Request, res:Response) => {
    res.send('hello')
})

router.use('/test', testRouter)

export default router