import StackStragy from './IStack'

export default class Stack<Type> implements StackStragy<Type> {

    private storageStrategy :  StackStragy<Type>;

    constructor(strategy : StackStragy<Type> ) {
        this.storageStrategy = strategy;
    }

    isEmpty () {
        return this.storageStrategy.isEmpty();
    }

    push( node : Type ){
        this.storageStrategy.push(node);
    }

    pop() {
        return this.storageStrategy.pop();
    }
}