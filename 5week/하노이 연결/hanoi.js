var _1arrLt = 0;
var _2arrLt = 0;
var _3arrLt = 0;
var HL = 0;
var inOut = 0;
var _1arr = ["<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥","<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨","<br>🟩🟩🟩🟩🟩🟩🟩","<br>🟦🟦🟦🟦🟦","<br>🟪🟪🟪","<br>⬛"]
var _2arr = []
var _3arr = []

var a = document.getElementsByClassName("A")

function _click1() {
    hanoiRule_1arr();
    if(inOut==0 && _1arr.length!=0){
        hand = _1arr[_1arr.length-1]
        _1arr.pop();
        a[0].innerHTML = _1arr;
        inOut=1;
        hanoiRule();
    }else if(HL<_1arrLt || _1arrLt==0){
        if(HL!=0){
            _1arr.push(hand);
            a[0].innerHTML = _1arr;
            inOut=0;
            HL=0;
        }
    }
}
function _click2() {
    hanoiRule_2arr();
    if(inOut==0 && _2arr.length!=0){
        hand = _2arr[_2arr.length-1]
        _2arr.pop();
        a[1].innerHTML = _2arr;
        inOut=1;
        hanoiRule();
    }else if(HL<_2arrLt || _2arrLt==0){
        if(HL!=0){
            _2arr.push(hand);
            a[1].innerHTML = _2arr;
            inOut=0;
            HL=0;
        }
    }
}
function _click3() {
    hanoiRule_3arr();
    if(inOut==0 && _3arr.length!=0){
        hand = _3arr[_3arr.length-1]
        _3arr.pop();
        a[2].innerHTML = _3arr;
        inOut=1;
        hanoiRule();
    }else if(HL<_3arrLt || _3arrLt==0){
        if(HL!=0){
            _3arr.push(hand);
            a[2].innerHTML = _3arr;
            inOut=0;
            HL=0;
        }
    }
}
function _startBtn(){
   render()
}

function render(){
    _1arr = ["<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥","<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨","<br>🟩🟩🟩🟩🟩🟩🟩","<br>🟦🟦🟦🟦🟦","<br>🟪🟪🟪","<br>⬛"]
    _2arr = []
    _3arr = []
    a[0].innerHTML = _1arr;
    a[1].innerHTML = _2arr;
    a[2].innerHTML = _3arr;
}

function hanoiRule(){
    if(hand=="<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"){
        HL = 11;
    }else if(hand=="<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨"){
        HL = 9;
    }else if(hand=="<br>🟩🟩🟩🟩🟩🟩🟩"){
        HL = 7;
    }else if(hand=="<br>🟦🟦🟦🟦🟦"){
        HL = 5;
    }else if(hand=="<br>🟪🟪🟪"){
        HL = 3;
    }else if(hand=="<br>⬛"){
        HL = 1;
    }
}
function hanoiRule_1arr(){
    if(_1arr[_1arr.length-1]=="<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"){
        _1arrLt = 11;
    }else if(_1arr[_1arr.length-1]=="<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨"){
        _1arrLt = 9;
    }else if(_1arr[_1arr.length-1]=="<br>🟩🟩🟩🟩🟩🟩🟩"){
        _1arrLt = 7;
    }else if(_1arr[_1arr.length-1]=="<br>🟦🟦🟦🟦🟦"){
        _1arrLt = 5;
    }else if(_1arr[_1arr.length-1]=="<br>🟪🟪🟪"){
        _1arrLt = 3;
    }else if(_1arr[_1arr.length-1]=="<br>⬛"){
        _1arrLt = 1;
    }else{
        _1arrLt = 0;
    }
}
function hanoiRule_2arr(){
    if(_2arr[_2arr.length-1]=="<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"){
        _2arrLt = 11;
    }else if(_2arr[_2arr.length-1]=="<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨"){
        _2arrLt = 9;
    }else if(_2arr[_2arr.length-1]=="<br>🟩🟩🟩🟩🟩🟩🟩"){
        _2arrLt = 7;
    }else if(_2arr[_2arr.length-1]=="<br>🟦🟦🟦🟦🟦"){
        _2arrLt = 5;
    }else if(_2arr[_2arr.length-1]=="<br>🟪🟪🟪"){
        _2arrLt = 3;
    }else if(_2arr[_2arr.length-1]=="<br>⬛"){
        _2arrLt = 1;
    }else{
        _2arrLt = 0;
    }
}
function hanoiRule_3arr(){
    if(_3arr[_3arr.length-1]=="<br>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"){
        _3arrLt = 11;
    }else if(_3arr[_3arr.length-1]=="<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨"){
        _3arrLt = 9;
    }else if(_3arr[_3arr.length-1]=="<br>🟩🟩🟩🟩🟩🟩🟩"){
        _3arrLt = 7;
    }else if(_3arr[_3arr.length-1]=="<br>🟦🟦🟦🟦🟦"){
        _3arrLt = 5;
    }else if(_3arr[_3arr.length-1]=="<br>🟪🟪🟪"){
        _3arrLt = 3;
    }else if(_3arr[_3arr.length-1]=="<br>⬛"){
        _3arrLt = 1;
    }else{
        _3arrLt = 0;
    }
}

