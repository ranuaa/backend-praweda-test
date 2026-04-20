import { Request, Response } from "express";
import { getJoinedArray } from "./array.service";

export const getArrayController = (req: Request, res: Response) => {
  const data = getJoinedArray();

  return res.json({
    success: true,
    data,
  });
};