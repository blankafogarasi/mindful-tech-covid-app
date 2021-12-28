import express, {Request, Response} from "express";
import { statModel } from "../models/statModel";
import {Stat} from "../types/stat";
import * as apiManager from "../models/apiModel";
import {dbFindOne} from "../db";
export const router = express.Router();
import cors from 'cors';

router.use(cors());

router.post("/", async (req: Request, res: Response) => {
    const newStat: Stat = req.body;
    statModel.create(newStat, (err: Error, statId: number) => {
        if (err) {
            return res.status(500).json({"message": err.message});
        }

        res.status(200).json({"statId": statId});
    });
});

router.get("/stats", async (req: Request, res: Response) => {
    const result = await statModel.findAll();
    res.status(200).json(result);
})

// router.get("/", async (req: Request, res: Response) => {
//     await apiManager.saveCovidStats();
//     res.status(200).json({});
// })