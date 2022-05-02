function fn() {
    return "11";
}
var fn1 = function () {
    return 11;
};
// 不用定义，类型推断  (name: string) => string | false
var fn2 = function (name) {
    if (name) {
        return name;
    }
    else {
        return false;
    }
};
// 永远都不会又返回值
var fn3 = function () {
    throw new Error();
};
// 不过所有带有throw语句都是没有返回值的
var fn4 = function (message) {
    if (!message)
        throw new Error();
};
var objfn5 = {
    name: "曹操",
    date: new Date(),
    inObj: {
        name1: "曹丕",
        sex: 1
    }
};
var fn5 = function (_a) {
    var name = _a.name, date = _a.date, _b = _a.inObj, name1 = _b.name1, sex = _b.sex;
    console.log(name, date, name1, sex);
};
fn5(objfn5);
