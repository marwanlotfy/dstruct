export type DSNode<T> = {
    data : T ;
    next : DSNode<T> | null | undefined;
}