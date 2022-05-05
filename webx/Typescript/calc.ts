var res:number;
var y:number;
var x:number;

const addition = () => {
    x = document.getElementById('n1').value;
    y =  document.getElementById('n2').value;
    res=(x+y);
    document.getElementById('answer').innerHTML = "<span>the addition of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

const subtraction = () => {
    x = document.getElementById('n1').value;
    y =  document.getElementById('n2').value;
    res=(x-y);
    document.getElementById('answer').innerHTML = "<span>the subtraction of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

const mult = () => {
    x = document.getElementById('n1').value;
    y =  document.getElementById('n2').value;
    res=(x*y);
    document.getElementById('answer').innerHTML = "<span>the multiplication of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

const div = () => {
    x = document.getElementById('n1').value;
    y =  document.getElementById('n2').value;
    res=(x/y);
    document.getElementById('answer').innerHTML = "<span>the division of "+x+" and "+y+" is<span> "+res+"</span></span>";
}

document.getElementById('add').addEventListener('click', addition);
document.getElementById('sub').addEventListener('click', subtraction);
document.getElementById('mult').addEventListener('click', mult);
document.getElementById('div').addEventListener('click', div);
