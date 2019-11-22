let container=document.querySelector(".container");
let list=document.querySelector(".list");
let pictures=document.querySelector(".picture");
let btn=document.querySelectorAll(".btn");
let back=document.querySelector(".back");
let next=document.querySelector(".next");
let timer=null;
let changeTime=2000;
//高亮按钮，标记当前图片为第几张
let present=0;
//图片列的宽度，包含隐藏的图片
let listWidth=list.offsetWidth;
//每张图片的宽度，用于视图移动
let pictureWidth=pictures.offsetWidth;
function turnRight(){
    //视图切换到下一张图片
    list.style.left=list.offsetLeft-pictureWidth+"px";
    console.log("当前视窗在图片条中的位置为"+Math.abs(list.offsetLeft));
    btn_Present();
    // if((Math.abs(list.offsetLeft))%650==0){
    //     changeTime=2000;
    //     btn_Present();
    //     console.log("停顿点");
    // }
    // else{
    //     changeTime=3;
    // }
    //当前图片为最后一张时，下一次播放回到开始播放第一张图片
    if(list.offsetLeft<=-listWidth){
        list.style.left=0+'px';
        }
    timer=setTimeout(turnRight,changeTime);
}
//检测图片正向播放位置，高亮按钮与之对应
function btn_Present(){
    //一旦到达检测到当前轮的播放结束，回到下一轮开始时，将第五个高亮按钮清除高亮，第一个按钮高亮显示
    if(present>=btn.length-1){
        present=0;
        btn[present].classList.add("on");
        btn[btn.length-1].classList.remove("on");
    }
    //非当前轮结束点时，则将播放的图片顺序与按钮高亮对应
    else{
    //将整个图片列表向左移动一张图片的宽度，将下一张图片暴露在视窗,上一张图片被隐藏
        present++;
        btn[present].classList.add("on");
        btn[present-1].classList.remove("on");
    }
}
//检测图片逆向播放位置，高亮按钮与之对应
function btn_Just(){
    //一旦到达检测到当前播放图片为第一张，下一次回到最后一张图片，将第一个高亮按钮清除高亮，最后一个按钮高亮显示
    if(present<=0){
        present=btn.length-1;
        btn[present].classList.add("on");
        btn[0].classList.remove("on");
    }
    //非当前轮结束点时，则将播放的图片顺序与按钮高亮对应
    else{
    //将整个图片列表向左移动一张图片的宽度，将下一张图片暴露在视窗,上一张图片被隐藏
        present--;
        btn[present].classList.add("on");
        btn[present+1].classList.remove("on");
    }
}
//点击按钮向左移动一张图片
back.onclick=function(){
    btn_Just();
    if(list.offsetLeft==0){
        list.style.left=list.offsetLeft-listWidth+"px";
    }
    list.style.left=list.offsetLeft+pictureWidth+"px"; 
    console.log(list.offsetLeft);
}
//点击按钮向右移动一张图片
next.onclick=function(){
    btn_Present();
    list.style.left=list.offsetLeft-pictureWidth+"px";
    if(list.offsetLeft==-listWidth){
        list.style.left=list.offsetLeft+listWidth+"px";
    }  
    console.log(list.offsetLeft);
}
btn[0].onclick=function(){
    list.style.left=0+"px";
    btn[0].classList.add("on");
    for(let i=1;i<5;i++){
        btn[i].classList.remove("on");
    }
    present=0;
}
btn[1].onclick=function(){
    list.style.left=-650+"px";
    btn[1].classList.add("on");
    for(let i=0;i<5;i++){
        if(i!=1){
            btn[i].classList.remove("on");
        }
    }
    present=1;
}
btn[2].onclick=function(){
    list.style.left=-1300+"px";
    btn[2].classList.add("on");
    for(let i=0;i<5;i++){
        if(i!=2){
            btn[i].classList.remove("on");
        }
    }
    present=2;
}
btn[3].onclick=function(){
    list.style.left=-1950+"px";
    btn[3].classList.add("on");
    for(let i=0;i<5;i++){
        if(i!=3){
            btn[i].classList.remove("on");
        }
    }
    present=3;
}
btn[4].onclick=function(){
    list.style.left=-2600+"px";
    btn[4].classList.add("on");
    for(let i=0;i<5;i++){
        if(i!=4){
            btn[i].classList.remove("on");
        }
    }
    present=4;
}
//鼠标移动到视窗，清除定时器，停止播放
container.onmouseenter=function(){
    clearTimeout(timer);
}
//鼠标离开视窗，调用自动轮播函数
container.onmouseleave=function(){
    turnRight();
}
// timer=setInterval(turnRight,changeTime);
timer=setTimeout(turnRight,changeTime);

