let myImage = document.querySelector('img');
myImage.onclick = ()=>{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/福建省地级市.jpg'){
        myImage.setAttribute('src', 'images/地图3.jpg');
    }else{
        myImage.setAttribute('src', 'images/福建省地级市.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '虎纠丫霸，'+myName;
    }   
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '虎纠丫霸，'+storedName;
}

myButton.onclick = function(){
    setUserName(); 
}