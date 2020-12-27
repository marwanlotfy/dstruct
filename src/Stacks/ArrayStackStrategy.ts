import StackStragy from "./IStack";
import { StackNode } from './../types/Stack'

export default class ArrayStackStrategy<Type> implements StackStragy<Type>{
    private _storage : Type[] = [];
    
    push (node: Type) : void {
        this._storage.push(node);
    } 

    pop () : StackNode<Type> {
        if(!this.isEmpty()){
            const val = this._storage[this._storage.length - 1];
            delete this._storage[this._storage.length - 1];
            return val;
        }

        return null;
    }
    isEmpty () : boolean {
        return !! this._storage.length;
    }

}