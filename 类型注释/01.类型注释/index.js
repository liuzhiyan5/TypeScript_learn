// 像以下这种简单的变量定义，可以不使用类型注释，可以由ts进行类型推断
var num = 6;
var str = "3";
var hasName = true;
// 像这种后面跟new的，那new后面就是他的类型
var date = new Date();
var colors = ["yellow", "green", "red"];
var colors2 = ["yellow", "green", "red"];
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
var obj = { one: 111, two: "222" };
// 自定义类
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log(11);
    };
    return Car;
}());
var car = new Car();
// 函数
function fn(str) {
    console.log(str);
}
fn("45");
function fn2(num1, num2) {
    return num1 + num2;
}
fn2(1, 2);
var nothing = undefined;
var nothingMuch = null;
