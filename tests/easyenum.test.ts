import { EasyEnum } from '../src/index';

describe('EasyEnum', () => {
  test('returns an object with enum-like properties', () => {
    const MyEnum = EasyEnum('FOO', 'BAR', 'BAZ');

    expect(MyEnum).toEqual({
      FOO: 'FOO',
      BAR: 'BAR',
      BAZ: 'BAZ',
    });
  });

  test('enum properties have correct type', () => {
    const MyEnum = EasyEnum('FOO', 'BAR', 'BAZ');
    type MyEnumType = keyof typeof MyEnum;
    const myVar: MyEnumType = 'FOO';
    expect(myVar).toBe('FOO');
  });
});
