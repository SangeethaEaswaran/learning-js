if (10>5){
    var outcome = 'if block';
}
console.log(outcome);

if("cat" === "dog"){
     var outcome = "if block";
 } else {
     var outcome = "else block";
 }
console.log(outcome);

if (false){
    var outcome = "if block";
}else if (true){
    var outcome = "else if block";
} else {
    var outcome = "else block";
}
console.log(outcome);

if (false){
    var outcome = "if block";
}else if (true){
    var outcome = "first else if block";
} else if (true){
    var outcome = "second else if block";
} else {
    var outcome = "else block";
}
console.log(outcome);

if (false){
    var outcome = "if block";
}else if (false){
    var outcome = " else if block";
}
console.log(outcome);