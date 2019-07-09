//1.创建对象，修改属性，删除属性
var user = {
    name:"John",
    surname:"Mike"
};
user.name = "Peter";
console.log(user.name + "\t" + user.surname);
delete user.name;

//计算价格
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
console.log((fruit.apple + fruit.pear + fruit.peach));