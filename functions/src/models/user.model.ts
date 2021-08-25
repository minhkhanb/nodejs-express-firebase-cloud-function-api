import { Collection } from 'fireorm';

@Collection()
export class User {
  id: string;
  firstName: string;
  lastName: string;
  done: boolean;
}
