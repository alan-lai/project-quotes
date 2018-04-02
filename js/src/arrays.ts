declare global {
    interface IArray<T> {
        find(predicate: (search: T) => boolean): T;
    }
}

interface Array<T> {
    find(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): T | undefined;
}

export {IArray};