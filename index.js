// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
document.write(name.toLocaleUpperCase());


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
function titleCase(str) {
    var newarr,newarr1=[]; 
    newarr = str . toLowerCase() . split(" ");
    for(var i = 0 ; i < newarr . length ; i++){
    newarr1 . push(newarr[i][0] . toUpperCase()+newarr[i] . substring(1));
    }
    return newarr1.join(' ');
   }  
   document.write(titleCase(sentence));


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
document.write(money.substring(1,money.length));
