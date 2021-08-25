import { Request, Response } from 'express';
import { createUser, remove, update } from '../services';

export async function createNewUser(req: Request, res: Response): Promise<void> {
  const user = await createUser();
  res.status(200).send(user);
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const userInput = req.body;
  const user = await update(id, userInput);
  res.status(200).send(user);
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const user = await remove(id);
  res.status(200).send(user);
}
