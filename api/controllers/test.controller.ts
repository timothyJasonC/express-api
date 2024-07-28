import { Request, Response } from "express";

export const testController = async (req: Request, res: Response) => {
    try {
        res.send('ini test 2')
    } catch (err) {
        res.status(400).send({
            status: 'error',
            message: err
        });
    }
}