import { getRepository } from 'fireorm';
import { User } from '../models/user.model';

const userRepository = getRepository(User);

export async function createUser(): Promise<User> {
  const user = new User();
  user.firstName = 'Kha';
  user.lastName = 'Le';
  user.done = false;

  return await userRepository.create(user);
}

export async function findOne(id: string): Promise<User> {
  return await userRepository.findById(id);
}

export async function update(id: string, user: User): Promise<User> {
  return await userRepository.update(user);
}

export async function remove(id: string): Promise<void> {
  await userRepository.delete(id);
}
