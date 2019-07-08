
// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a));
console.log(Array.isArray(b));
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
}
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
var str1 = "";
var str2 = "";
var str3 = "";
for (var i = 0; i < colors.length; i++) {
    if (i < colors.length - 1) {
        str1 = str1 + colors[i] + '\t';
        str2 = str2 + colors[i] + '+';
        str3 = str3 + colors[i] + ',';
    } else {
        str1 = str1 + colors[i];
        str2 = str2 + colors[i];
        str3 = str3 + colors[i];
    }
}
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var arr = [5, 1, 8, 10, 4];
arr = (arr.sort(function (a, b) { return a - b })).reverse();
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var h = {};
var maxNum = 0;
var maxEle = null;
for (var i = 0; i < arr.length; i++) {
    var a = arr[i];
    h[a] === undefined ? h[a] = 1 : (h[a]++);
    if (h[a] > maxNum) {
        maxEle = a;
        maxNum = h[a];
    }
}
document.write(maxEle);
//TODO should output: 'a'