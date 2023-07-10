import { MyDataBaseModule } from './db/my_database_module';
import { myDataBaseClassic as myDatabaseFromModuleA } from './module_a';

const myDataBaseClassic = MyDataBaseModule;

myDataBaseClassic.add({ name: 'João', age: 25 });
myDataBaseClassic.add({ name: 'Fernanda', age: 12 });
myDataBaseClassic.add({ name: 'Gonçalves', age: 50 });
myDataBaseClassic.show();

console.log(myDataBaseClassic === myDatabaseFromModuleA);
