"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStackStrategy = /** @class */ (function () {
    function ArrayStackStrategy() {
        this._storage = [];
    }
    ArrayStackStrategy.prototype.push = function (node) {
        this._storage.push(node);
    };
    ArrayStackStrategy.prototype.pop = function () {
        if (!this.isEmpty()) {
            var val = this._storage[this._storage.length - 1];
            delete this._storage[this._storage.length - 1];
            return val;
        }
        return null;
    };
    ArrayStackStrategy.prototype.isEmpty = function () {
        return !!this._storage.length;
    };
    return ArrayStackStrategy;
}());
exports.default = ArrayStackStrategy;
