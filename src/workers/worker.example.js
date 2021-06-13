import { expose } from 'comlink';

const obj = {
  log: () => console.log('TEST'),
};

expose(obj);
