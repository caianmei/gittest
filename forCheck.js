for (var i = 0; i <= 20; i++) {
    var sum;
    if (i % 2 == 0) {
        sum = i + "是偶数。";
    } else {
        sum = i + "是奇数。";
    }
    if (i != 0 && i < 20) {
        document.write(sum + "<br>");
    }else if(i != 0){
        document.write(sum);
    }
    
}