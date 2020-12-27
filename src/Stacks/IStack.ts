import { StackNode } from './../types/Stack'
export default interface StackStragy<Type>{
    push : ( node : Type ) => void ;
    pop  : () => StackNode<Type>;
    isEmpty : () => boolean ;
}