import { DSNode } from './../types/DSNode';
import { IList } from './IList';
export default class List<T> implements IList<T> {
    private _head;
    private _tail;
    constructor(firstNode: DSNode<T>);
    appendToHead(node: DSNode<T>): void;
    appendToTail(node: DSNode<T>): void;
    get head(): DSNode<T> | null | undefined;
    isEmpty(): boolean;
}
