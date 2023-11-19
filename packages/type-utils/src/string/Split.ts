/**
 * @example
 * ```ts
 * StringSplit<'string'> // ["s", "t", "r", "i", "n", "g"]
 * StringSplit<'string-number', '-'> // ["string", "number"]
 * ```
 */
export type StringSplit<
    T extends string,
    SEP extends string = ''
> = T extends `${infer A}${SEP}${infer B}`
    ? [A, ...(B extends '' ? [] : StringSplit<B, SEP>)]
    : T extends ''
    ? []
    : [T]
