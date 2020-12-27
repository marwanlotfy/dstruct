import LinkedListStackStrategy from "./Stacks/LinkedListStack"
import ArrayStackStrategy from './Stacks/ArrayStackStrategy'
import Stack from "./Stacks/Stack"
import { DataTypes , StackStrategy} from './types/Stack';

export const createStack = (strategy : StackStrategy , type : DataTypes ) => {

    if (strategy === 'list') {
        switch (type) {
            case 'number':
                return new Stack<Number>(
                    new LinkedListStackStrategy<Number>()
                );
            case 'string':
                return new Stack<String>(
                    new LinkedListStackStrategy<String>()
                );
            case 'object':
                return new Stack<Object>(
                    new LinkedListStackStrategy<Object>()
                );
        }
    }else if (strategy === 'array') {
        switch (type) {
            case 'number':
                return new Stack<Number>(
                    new ArrayStackStrategy<Number>()
                );
            case 'string':
                return new Stack<String>(
                    new ArrayStackStrategy<String>()
                );
            case 'object':
                return new Stack<Object>(
                    new ArrayStackStrategy<Object>()
                );
        }
    }
}