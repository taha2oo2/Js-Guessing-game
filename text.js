 var num= Math.round(Math.random() *10); 
//  var n =num === b; 
 for (var i=0;i<=10;i++){
 var b = +prompt("Enter a number");
if(num === b){
    alert("Correct Guess");
    break;
} else{
    alert(" Try Again");
    continue;
}     } 


// else if( num - 1 === b){
//     alert("Close Enough!! but the num was:" +num);

// }

// else if( num + 1 === b){
//     alert("Close Enough!! but the num was:  " +num);

// }
//  do{
//     var b = +prompt("Enter a number");
//     console.log("comp:" +num)
//     console.log("user:" +b)
//  }while(!(num===b));

