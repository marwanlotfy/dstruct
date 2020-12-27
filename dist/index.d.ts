import Stack from "./Stacks/Stack";
import { DataTypes, StackStrategy } from './types/Stack';
export declare const createStack: (strategy: StackStrategy, type: DataTypes) => Stack<Number> | Stack<String> | Stack<Object> | undefined;
