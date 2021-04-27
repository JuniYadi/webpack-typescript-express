import express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        return res.status(200).json({
            code: 200,
            message: 'success'
        })

    } catch (e) {
        return res.status(422).json({
            code: 422,
            message: 'error'
        });
    }
})

app.listen(3000, () => {
    console.log('Server run in Port: 3000');
})