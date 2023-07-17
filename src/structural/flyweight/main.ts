import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Bruno', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Flávia', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Julio', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Geovana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Tenório', '501', 'Rua B', 'RJ');

console.log();
console.log(factory.getLocations());
