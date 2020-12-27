import StackStragy from "./IStack";
import { StackNode } from './../types/Stack'
import List from "../LinkedLists/List";

export default class LinkedListStackStrategy<Type> implements StackStragy<Type>{
    private _storage : List<Type> | null = null ;
    
    push (node: Type) : void {
        if (!this._storage) {
            this._storage = new List<Type>({data : node , next : null});
        }else{
            this._storage.appendToHead({data : node , next : null});
        }
    } 

    pop () : StackNode<Type> {
        return this._storage?.head?.data;
    }

    isEmpty () : boolean {
        if (this._storage) {
            return this._storage.isEmpty();
        }

        return true;
    }

}