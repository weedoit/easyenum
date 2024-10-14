export function EasyEnum<T extends string>(...items: T[]): { [K in T]: K } {
  return items.reduce(
    (acc, cur) => {
      acc[cur] = cur;
      return acc;
    },
    {} as { [K in T]: K }
  );
}

export type InferEnum<T> =
  T extends ReturnType<typeof EasyEnum<infer U extends string>> ? U : never;
