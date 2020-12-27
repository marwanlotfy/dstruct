"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List(firstNode) {
        this._head = null;
        this._tail = null;
        this._head = firstNode;
        this._tail = firstNode;
    }
    List.prototype.appendToHead = function (node) {
        node.next = this._head;
        this._head = node;
    };
    List.prototype.appendToTail = function (node) {
        this._tail = node;
    };
    Object.defineProperty(List.prototype, "head", {
        get: function () {
            var _a;
            var head = this._head;
            this._head = (_a = this._head) === null || _a === void 0 ? void 0 : _a.next;
            return head;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.isEmpty = function () {
        return !this._head;
    };
    return List;
}());
exports.default = List;
