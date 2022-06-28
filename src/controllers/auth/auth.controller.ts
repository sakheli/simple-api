import { Request, Response } from 'express';
import userSchema from '../../schema/user.schema';
import mongoose from 'mongoose';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


export const singUp = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const User = mongoose.model('Users', userSchema);
    const userExists = await User.findOne({email: email})

    if (userExists) {
        return res.status(304).json({ "message": "User already exists."});
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    newUser.save(function (err) {
        if (err) return res.status(424).json({message: err});
    });
    
    return res.status(200).json(newUser);
}


export const singIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const User = mongoose.model('Users', userSchema);
    const selectedUser = await User.findOne({email: email})
 

    if (selectedUser === null) {
        return res.status(404).json({ "message": "email is incorrect"});
    }

    const matches = await bcrypt.compare(password, selectedUser.password);

    
    if (!matches) { return res.status(404).json({ "message": "password is incorrect"}); }        
    

    const token = jwt.sign(
        { id: selectedUser._id, email },
        process.env.JWT_TOKEN,
        {
            expiresIn: process.env.JWT_EXPIRY,
        }
    );
    
    return res.status(200).json({"token":token, "message": "signed in successfully"});
}

