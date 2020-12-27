import { DSNode } from './../types/DSNode';
import { IList } from './IList';

export default class List<T> implements IList<T> {
    private _head : DSNode<T> | null | undefined = null;
    private _tail : DSNode<T> | null | undefined = null;

    constructor(firstNode : DSNode<T>){
        this._head = firstNode;
        this._tail = firstNode;
    }

    appendToHead(node : DSNode<T> ) : void {
        node.next = this._head;
        this._head = node;
    }

    appendToTail(node : DSNode<T> ) : void {
        this._tail = node;
    }

    get head() : DSNode<T> | null | undefined{
        const head = this._head;
        this._head = this._head?.next;
        return head;
    }

    isEmpty() : boolean {
        return !this._head;
    }
}