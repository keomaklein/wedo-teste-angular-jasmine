import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    const ids = [];
    for (let index = 0; index < 4; index++) {
      ids.push(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.length).toBe(4);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1', '#', 'cas'];

      emptyValues.forEach(ev => {
        expect(()=>service.generateUniqueIdWithPrefix(ev))
        .withContext(`Empty value: ${ev}`)
        .toThrow();
      })
  });
})
