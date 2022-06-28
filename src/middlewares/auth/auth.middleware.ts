import { Request, Response, NextFunction  } from "express";
const jwt = require('jsonwebtoken');

export const authUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.headers['authorization']?.split(' ')[1];
        await jwt.verify(token, process.env.JWT_TOKEN);
        next();
    } catch {
        res.status(401).json({
            "message": "invalid token"
        });
    }
}
