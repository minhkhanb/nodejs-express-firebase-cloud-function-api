import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';

export const firestore = {
  init: (): void => {
    admin.initializeApp();
    const firestore = admin.firestore();
    fireorm.initialize(firestore);
  },
};
