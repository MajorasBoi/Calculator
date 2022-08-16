var text=document.querySelector(".result");
var one=document.querySelector("#one");
const number_containers = document.querySelector(".num").childNodes;

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function PushNumber(number){
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


