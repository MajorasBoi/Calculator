var text=document.querySelector(".result");
var one=document.querySelector("#one");
const number_containers = document.querySelector(".num").childNodes;
const op_containers = document.querySelector(".right").childNodes;

var num1 = 0;
var result = 0;
var op = 0;
var o =0;

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function PushNumber(number){
    if(o){
        text.innerHTML = number;
        op = o;
        o = 0;
        return;
    }
    if(text.textContent[0] === '-'){
        if(text.textContent.length < 11 && (text.textContent.indexOf(',') === text.textContent.lastIndexOf(',')) && text.textContent.includes('.') === true && text.textContent.includes(',') === true){
            text.innerHTML = text.innerHTML + number; 
        }
        else if(text.textContent.length < 12 && (text.textContent.indexOf(',') != text.textContent.lastIndexOf(',')) && text.textContent.includes('.') === true && text.textContent.includes(',') === true){
            text.innerHTML = text.innerHTML + number;
        }
        else if(text.textContent.length < 11 && text.textContent.includes('.') === false){
            if(text.innerHTML === "0"){
                text.innerHTML = number;
            }else{
                if(text.textContent.length === 4){
                    var i = text.textContent.length;
                    text.innerHTML = text.innerHTML + text.textContent[i-1];
                    for(i;i >= 2;i--){
                        text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    } 
                    text.textContent = text.textContent.replaceAt(2,',');
                    text.innerHTML=text.innerHTML + number;
                    return;
                }
                else if(text.textContent.length === 8){
                    var i = text.textContent.length;
                    text.innerHTML = text.innerHTML + text.textContent[i-1];
                    for(i;i >= 2;i--){
                        text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    } 
                    text.textContent = text.textContent.replaceAt(2,',');
                    i = 3;
                    for(i;i<text.textContent.length-1;i++){
                        if(text.textContent[i] === ','){
                            var temp;
                            temp = text.textContent[i+1];
                            text.textContent = text.textContent.replaceAt(i+1,text.textContent[i]);
                            text.textContent = text.textContent.replaceAt(i,temp);
                            i++;
                        }
                    }
                    text.innerHTML=text.innerHTML + number;
                    return;
                }
                var i = 0;
                for(i;i<text.textContent.length-1;i++){
                    if(text.textContent[i] === ','){
                        var temp;
                        temp = text.textContent[i+1];
                        text.textContent = text.textContent.replaceAt(i+1,text.textContent[i]);
                        text.textContent = text.textContent.replaceAt(i,temp);
                        i++;
                    }
                }
                text.innerHTML=text.innerHTML + number;
            }
        }
        else if(text.textContent.length < 10 && text.textContent.includes(',') === false){
            text.innerHTML = text.innerHTML + number;
        }
    }
    else{
        if(text.textContent.length < 10 && (text.textContent.indexOf(',') === text.textContent.lastIndexOf(',')) && text.textContent.includes('.') === true && text.textContent.includes(',') === true){
            text.innerHTML = text.innerHTML + number; 
        }
        else if(text.textContent.length < 11 && (text.textContent.indexOf(',') != text.textContent.lastIndexOf(',')) && text.textContent.includes('.') === true && text.textContent.includes(',') === true){
            text.innerHTML = text.innerHTML + number;
        }
        else if(text.textContent.length < 10 && text.textContent.includes('.') === false){
            if(text.innerHTML === "0"){
                text.innerHTML = number;
            }
            else{
                if(text.textContent.length === 3){
                    var i = text.textContent.length;
                    text.innerHTML = text.innerHTML + text.textContent[i-1];
                    for(i;i >= 2;i--){
                        text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    } 
                    text.textContent = text.textContent.replaceAt(1,',');
                    text.innerHTML=text.innerHTML + number;
                    return;
                }
                else if(text.textContent.length === 7){
                    var i = text.textContent.length;
                    text.innerHTML = text.innerHTML + text.textContent[i-1];
                    for(i;i >= 2;i--){
                        text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    } 
                    text.textContent = text.textContent.replaceAt(1,',');
                    i = 2;
                    for(i;i<text.textContent.length-1;i++){
                        if(text.textContent[i] === ','){
                            var temp;
                            temp = text.textContent[i+1];
                            text.textContent = text.textContent.replaceAt(i+1,text.textContent[i]);
                            text.textContent = text.textContent.replaceAt(i,temp);
                            i++;
                        }
                    }
                    text.innerHTML=text.innerHTML + number;
                    return;
                }
                var i = 0;
                for(i;i<text.textContent.length-1;i++){
                    if(text.textContent[i] === ','){
                        var temp;
                        temp = text.textContent[i+1];
                        text.textContent = text.textContent.replaceAt(i+1,text.textContent[i]);
                        text.textContent = text.textContent.replaceAt(i,temp);
                        i++;
                    }
                }
                text.innerHTML=text.innerHTML + number;
            }
        }
        else if(text.textContent.length < 9 && text.textContent.includes(',') === false){
            text.innerHTML = text.innerHTML + number;
        }
    }
}

function PushDot() {
    if(text.textContent.includes('.') === false){
        text.innerHTML = text.innerHTML + '.';
        return;
    }
}

function ClearAll(){
    text.innerHTML = '0';
}

function ClearLast(){
    if(text.textContent.includes('.')){
        var i = 0;
        var j = text.textContent.length -1;
        var temp = '';
        for(i;i < j;i++){
            temp = temp + text.textContent[i];
        }
        text.innerHTML = temp;
        return;
    }
    if(text.textContent.length === 1){
        text.innerHTML = '0';
        return;
    }
    else if(text.textContent.length === 2 && text.textContent[0] === '-'){
        text.innerHTML = '0';
        return;
    }
    var m = text.textContent.length;
    var temp = "";
    var i = 0;
    for(i;i<(m-1);i++){
        temp = temp + text.textContent[i];
    }
    text.innerHTML = temp;
    i = 0;
    m = text.textContent.length;
    for(i;i<(m-1);i++){
        if(text.textContent[i] === ','){
            var a = text.textContent[i];
            text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
            text.textContent = text.textContent.replaceAt(i-1,a);
            if(i === 1){
                temp = ""
                var j = 1;
                var n = text.textContent.length;
                for(j;j<n;j++){
                    temp = temp + text.textContent[j];
                }
                text.innerHTML = temp;
            }
            else if(text.textContent[0] === '-' && i === 2){
                temp = ""
                var j = 2;
                var n = text.textContent.length;
                for(j;j<n;j++){
                    temp = temp + text.textContent[j];
                }
                text.innerHTML = '-' + temp;
            }
        }
    }

    if(text.textContent[text.textContent.length - 1] === ','){
        m = text.textContent.length
        temp = "";
        i = 0;
        for(i;i<(m-1);i++){
            temp = temp + text.textContent[i];
        }
        text.innerHTML=temp;
    }
}

function Invert(){
    if(text.innerHTML === '0'){
        return;
    }
    text.innerHTML = '-' + text.innerHTML;
}

function Add(){
    if(num1 != 0){
        var i = 0;
        var temp = "";
        for(i;i<text.textContent.length;i++){
            if(text.textContent[i] != ','){
                temp = temp + text.textContent[i];
            }
        }
        num1 = num1 + parseFloat(temp);
        text.innerHTML = num1;
        o = 1;

        //Para cuando el numero es positivo, tiene coma y es mayor que 1000
        if(text.textContent[0] != '-' && text.textContent.includes('.') && text.textContent.indexOf('.') >= 4){
            console.log("entra1");
            var j = text.textContent.indexOf('.');
            if(j >= 4 && j <= 6){
                var i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-3,',');
            }
            else if(j === 7){
                var i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-6;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-2,',');
                text.textContent = text.textContent.replaceAt(j-6,',');
            }
        }

        //Para cuando el numero es negativo, tiene coma y es mayor que 1000
        else if(text.textContent.includes('.') && text.textContent.indexOf('.') >= 5){
            console.log("entra2");
            var j = text.textContent.indexOf('.');
            if(j >= 5 && j <= 7){
                var i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-3,',');
            }
            else if(j === 8){
                var i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-6;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-2,',');
                text.textContent = text.textContent.replaceAt(j-6,',');
            }
        }

        //Para cuando el numero es negativo y no tiene coma
        else if(text.textContent[0] === '-' && text.textContent.includes('.') === false ){
            console.log("entra3");
            var j = text.textContent.length;
            if(j >= 5 && j <= 7){
                var i = j;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-3,',');
            }
            else if(j >= 8 && j <= 9){
                var i = j;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-6;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j - 2,',');
                text.textContent = text.textContent.replaceAt(j - 6,',');
            }
        }

        //Para cuando el numero no tiene coma
        else if(text.textContent.includes('.') === false){
            console.log("entra4");
            var j = text.textContent.length;
            if(j >= 4 && j <= 6){
                var i = j;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j-3,',');
            }
            else if(j >= 7 && j <= 8){
                var i = j;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-3;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                i = text.textContent.length;
                text.innerHTML = text.innerHTML + 0;
                for(i;i > j-6;i--){
                    var temp2 = text.textContent[i];
                    text.textContent = text.textContent.replaceAt(i,text.textContent[i-1]);
                    text.textContent = text.textContent.replaceAt(i-1,temp2);
                }
                text.textContent = text.textContent.replaceAt(j - 2,',');
                text.textContent = text.textContent.replaceAt(j - 6,',');
            }
        }
    }
    else{
        var i = 0;
        var temp = "";
        for(i;i<text.textContent.length;i++){
            if(text.textContent[i] != ','){
                temp = temp + text.textContent[i];
            }
        }
        num1 = parseFloat(temp);
        o = 1; 
    }
}

function Substract(){
    
}

onkeydown = (event)=>{
    var o=event.keyCode;
    switch (o) {
        case 49:
            PushNumber(1);
            break;
        case 97:
            PushNumber(1);
            break;
        case 50:
            PushNumber(2);
            break;
        case 98:
            PushNumber(2);
            break;
        case 51:
            PushNumber(3);
            break;
        case 99:
            PushNumber(3);
            break;
        case 52:
            PushNumber(4);
            break;
        case 100:
            PushNumber(4);
            break;
        case 53:
            PushNumber(5);
            break;
        case 101:
            PushNumber(5);
            break;
        case 54:
            PushNumber(6);
            break;
        case 102:
            PushNumber(6);
            break;
        case 55:
            PushNumber(7);
            break;
        case 103:
            PushNumber(7);
            break;
        case 56:
            PushNumber(8);
            break;
        case 104:
            PushNumber(8);
            break;
        case 57:
            PushNumber(9);
            break;
        case 105:
            PushNumber(9);
            break;
        case 48:
            PushNumber(0);
            break;
        case 96:
            PushNumber(0);
            break;
        case 65:
            ClearAll();
            break;
        case 8:
            ClearLast();
            break;
        case 73:
            Invert();
            break;
        case 190:
            PushDot();
            break;
        case 110:
            PushDot();
            break;
        case 107:
            Add();
            break;
        case 109:
            Substract();
            break;
        case 189:
            Substract();
            break;
    
        default:
            break;
    }
}

number_containers.forEach(function(element){
    if(element.nodeType === 1){
        element.addEventListener("click",function(){
            if(element.innerText === '.'){
                text.innerHTML = text.innerHTML + '.';
                return;
            }
            PushNumber(parseInt(element.textContent))
        });
    }
});

op_containers.forEach(function(element){
    if(element.nodeType === 1){
        element.addEventListener("click",function(){
            if(element.innerText === '+'){
                Add();
                return;
            }
        });
    }
});
