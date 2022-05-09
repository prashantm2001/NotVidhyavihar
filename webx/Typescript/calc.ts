var res:number;
var y:number;
var x:number;

var addition = () => {
    x = +(<HTMLInputElement>document.getElementById('n1')).value;
    y =  +(<HTMLInputElement> document.getElementById('n2')).value;
    res=(x+y);
    document.getElementById('answer').innerHTML = "<span>the addition of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

var subtraction = () => {
    x = +(<HTMLInputElement>document.getElementById('n1')).value;
    y =  +(<HTMLInputElement>document.getElementById('n2')).value;
    res=(x-y);
    document.getElementById('answer').innerHTML = "<span>the subtraction of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

var mult = () => {
    x = +(<HTMLInputElement>document.getElementById('n1')).value;
    y =  +(<HTMLInputElement>document.getElementById('n2')).value;
    res=(x*y);
    document.getElementById('answer').innerHTML = "<span>the multiplication of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

var div = () => {
    x = +(<HTMLInputElement>document.getElementById('n1')).value;
    y =  +(<HTMLInputElement>document.getElementById('n2')).value;
    res=(x/y);
    document.getElementById('answer').innerHTML = "<span>the division of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

document.getElementById('add').addEventListener('click', addition);
document.getElementById('sub').addEventListener('click', subtraction);
document.getElementById('mult').addEventListener('click', mult);
document.getElementById('div').addEventListener('click', div);
