import StackStragy from './IStack';
export default class Stack<Type> implements StackStragy<Type> {
    private storageStrategy;
    constructor(strategy: StackStragy<Type>);
    isEmpty(): boolean;
    push(node: Type): void;
    pop(): import("../types/Stack").StackNode<Type>;
}
