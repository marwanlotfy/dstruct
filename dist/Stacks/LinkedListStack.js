"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = __importDefault(require("../LinkedLists/List"));
var LinkedListStackStrategy = /** @class */ (function () {
    function LinkedListStackStrategy() {
        this._storage = null;
    }
    LinkedListStackStrategy.prototype.push = function (node) {
        if (!this._storage) {
            this._storage = new List_1.default({ data: node, next: null });
        }
        else {
            this._storage.appendToHead({ data: node, next: null });
        }
    };
    LinkedListStackStrategy.prototype.pop = function () {
        var _a, _b;
        return (_b = (_a = this._storage) === null || _a === void 0 ? void 0 : _a.head) === null || _b === void 0 ? void 0 : _b.data;
    };
    LinkedListStackStrategy.prototype.isEmpty = function () {
        if (this._storage) {
            return this._storage.isEmpty();
        }
        return true;
    };
    return LinkedListStackStrategy;
}());
exports.default = LinkedListStackStrategy;
