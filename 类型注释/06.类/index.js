var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类与对象
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.testFn1 = function () {
        console.log("testFn1");
    };
    Test.prototype.testFn2 = function () {
        console.log("testFn2");
    };
    return Test;
}());
var test = new Test();
test.testFn1();
test.testFn2();
// 继承
var Lei = /** @class */ (function () {
    function Lei() {
    }
    Lei.prototype.leiFn = function () {
        console.log("leiFn");
    };
    return Lei;
}());
var One = /** @class */ (function (_super) {
    __extends(One, _super);
    function One() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "曹操";
        return _this;
    }
    return One;
}(Lei));
var one = new One();
console.log(one.name);
one.leiFn();
