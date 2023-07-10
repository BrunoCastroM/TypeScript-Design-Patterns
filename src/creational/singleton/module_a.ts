import { MyDataBaseFunction } from './db/my_database_function';

const myDataBaseClassic = MyDataBaseFunction;

myDataBaseClassic.add({ name: 'Bruno', age: 31 });
myDataBaseClassic.add({ name: 'Julio', age: 31 });
myDataBaseClassic.add({ name: 'Rafaela', age: 31 });
myDataBaseClassic.show();

export { myDataBaseClassic };
