import {Request, Response, NextFunction} from 'express';
import userService from '../services/user.service';
import * as dotenv from 'dotenv';
dotenv.config();

const fetchUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getUser(process.env.DB_TABLE);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const fetchUsersById = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const  id = parseInt(req.params.id, 10);
        const user = await userService.getUserById(id, process.env.DB_TABLE);
        if(!user) res.status(404).json({message: 'User not found'});
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        await userService.createUser(user, process.env.DB_TABLE);
        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const user = req.body;
        await userService.UpdateUser(id, user, process.env.DB_TABLE);
        res.status(200).json({message: 'User updated successfully'});
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        await userService.DeleteUser(id, process.env.DB_TABLE);
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        next(error);
    }
};

export default {
    fetchUsers,
    fetchUsersById,
    createUser,
    updateUser,
    deleteUser
};