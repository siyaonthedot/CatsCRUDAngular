import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = [
      { id: 1, name: 'Bella' , colour: 'black'},
      { id: 2, name: 'Chloe',colour: 'white' },
      { id: 3, name: 'Luna',colour: 'blue' },
      { id: 4, name: 'Celeritas',colour: 'red' },
      { id: 5, name: 'Oliver',colour: 'white' },
      { id: 6, name: 'RubberMan',colour: 'green' },
      { id: 7, name: 'Lucy',colour: 'blue' },
      { id: 8, name: 'Jasper',colour: 'black' },
      { id: 9, name: 'Gizmo',colour: 'black' },
      { id: 11, name: 'Tiger',colour: 'red' }
    ];
    return {cats};
  }
}
