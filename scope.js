let myGlobal = 5;

function noMyGlobal(){
    console.log(myGlobal)
}
function hasMyGlobal(){
    let myGlobal = 22;
    console.log(myGlobal)

}
function blockScope(){
    let inFunction = 3
    {
        let inBlockOnly = "this is only in Block"
        let inFunction = 11;
        console.log(inFunction);
        console.log(inBlockOnly);
    }
    console.log(inFunction);
    console.log(inBlockOnly);  //this is an error
}

function functionScope(){
    var inFunction = 3
    {
        var inBlockOnly = "this is only in Block"
        var inFunction = 11;
        console.log(inFunction);
        console.log(inBlockOnly);
    }
    console.log(inFunction);
    console.log(inBlockOnly);  //this is an error
}

function hasFunction(){
    
    console.log("outer function");

    function functionInFunction(){
        console.log("inner function");
    }
    functionInFunction();
}


function hasFunctionAsObject(){
    let num = 25;
    let rc = {};
    
    rc.inner = function(){
        console.log ("function that was declared as an object")
    }
    rc.increase = function(){
        num++;
    }
    rc.print= function(){
        console.log(num);
    }
    return rc;

}



x = hasFunctionAsObject();
x.print();
x.increase();
x.increase();
x.increase();
x.print();
y = hasFunctionAsObject();
y.print();


//functionInFunction();  this is in error, can't access function that is defined inside another function




/* function vs block scope
console.log("***************************")
functionScope();
blockScope(); //this errors out
*/


/* scoping rules with globals
noMyGlobal();
hasMyGlobal();
console.log(myGlobal);*/