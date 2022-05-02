"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("https://jsonplaceholder.typicode.com/todos/1").then(function (res) {
    console.log(res);
    // const todo = res.data;
    // console.log(todo)
    // const id = todo.id;
    // const title = todo.title;
    // const finished = todo.finished;
    // console.log(`
    //   任务的ID是: ${id},
    //   任务的名称是: ${title},
    //   任务是否完成: ${finished}
    // `);
});
