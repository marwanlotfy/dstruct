import StackStragy from "./IStack";
import { StackNode } from './../types/Stack';
export default class LinkedListStackStrategy<Type> implements StackStragy<Type> {
    private _storage;
    push(node: Type): void;
    pop(): StackNode<Type>;
    isEmpty(): boolean;
}
