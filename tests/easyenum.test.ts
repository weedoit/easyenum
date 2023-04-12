import { SuperEnum } from '../src/index';

describe('SuperEnum', () => {
  test('returns an object with enum-like properties', () => {
    const MyEnum = SuperEnum('FOO', 'BAR', 'BAZ');

    expect(MyEnum).toEqual({
      FOO: 'FOO',
      BAR: 'BAR',
      BAZ: 'BAZ',
    });
  });

  test('enum properties have correct type', () => {
    const MyEnum = SuperEnum('FOO', 'BAR', 'BAZ');
    type MyEnumType = keyof typeof MyEnum;
    const myVar: MyEnumType = 'FOO';
    expect(myVar).toBe('FOO');
  });
});
