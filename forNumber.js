for(var i = 1;i <= 9;i++){
    for(var j = 1; j <= i;j++){
        var sum = i + '*' + j + '=' + (i*j) + '\t\t';
        document.write(sum);
    }
    document.write("<br><br>");
}