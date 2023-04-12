export function SuperEnum<T extends string>(...items: T[]): { [K in T]: K } {
  return items.reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
  }, {} as { [K in T]: K });
}
