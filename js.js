var names=["mariami", "ann", "luca", "sall"]
var text="my name is"
for (var i=0;i<names.length;i++){
    document.getElementById("demo").innerHTML += text+" "+ names[i] + "<br>";
}
function shop(x, price){
    var message=price(x);
    document.getElementById("demo1").innerHTML=message;
}
function myFunction(_money){
    if (_money<=20)
        return "good price";
    
    else if (_money>20 && _money<=50)
        return "average price";
    
    else if (_money>50 && _money<=70)
        return "expensive price";
    
    else(_money>70)
        return "very expensive price";
}
shop(80, myFunction);

var numbers = [ 15,53,22,198,10,28,16,70,33,951 ] ;
var result=numbers.filter((n)=> n%2 !==0);
document.getElementById("demo2").innerHTML=result;