import { DSNode } from './../types/DSNode';

export interface IList<T>{
    appendToHead : (node : DSNode<T> ) =>  void; 
    appendToTail : (node : DSNode<T> ) => void ;
    isEmpty : () => boolean ;
}