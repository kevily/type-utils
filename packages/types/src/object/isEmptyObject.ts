export type isEmptyObject<T extends object> = keyof T extends never ? true : false
