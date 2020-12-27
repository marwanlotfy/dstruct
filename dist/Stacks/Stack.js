"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack(strategy) {
        this.storageStrategy = strategy;
    }
    Stack.prototype.isEmpty = function () {
        return this.storageStrategy.isEmpty();
    };
    Stack.prototype.push = function (node) {
        this.storageStrategy.push(node);
    };
    Stack.prototype.pop = function () {
        return this.storageStrategy.pop();
    };
    return Stack;
}());
exports.default = Stack;
