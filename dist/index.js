"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStack = void 0;
var LinkedListStack_1 = __importDefault(require("./Stacks/LinkedListStack"));
var ArrayStackStrategy_1 = __importDefault(require("./Stacks/ArrayStackStrategy"));
var Stack_1 = __importDefault(require("./Stacks/Stack"));
var createStack = function (strategy, type) {
    if (strategy === 'list') {
        switch (type) {
            case 'number':
                return new Stack_1.default(new LinkedListStack_1.default());
            case 'string':
                return new Stack_1.default(new LinkedListStack_1.default());
            case 'object':
                return new Stack_1.default(new LinkedListStack_1.default());
        }
    }
    else if (strategy === 'array') {
        switch (type) {
            case 'number':
                return new Stack_1.default(new ArrayStackStrategy_1.default());
            case 'string':
                return new Stack_1.default(new ArrayStackStrategy_1.default());
            case 'object':
                return new Stack_1.default(new ArrayStackStrategy_1.default());
        }
    }
};
exports.createStack = createStack;
