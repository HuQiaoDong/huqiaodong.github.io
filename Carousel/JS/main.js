let container=document.querySelector(".container");
let list=document.querySelector(".list");
let pictures=document.querySelector(".picture");
let allPictures=document.getElementsByClassName("picture");
let btn=document.querySelectorAll(".btn");
let back=document.querySelector(".back");
let next=document.querySelector(".next");
let timer=null;
let timer2=null;
//停顿点的延时
let changeTime=4000;
let changeTimer2=1;
//三种移动方式移动一次的Left值
let autoSpeed=25;
let moveOneImageSpeed=25;
let btnMoveSpeed=50;
//底部按钮位置定位
let indexOffsetLeft;
//高亮按钮，标记当前图片为第几张
let index=0;
//图片列的宽度，包含隐藏的图片
let listWidth=list.offsetWidth;
//每张图片的宽度，用于视图移动
let pictureWidth=pictures.offsetWidth;
function turnRight(){
    //视图切换到下一张图片
    moveRight(autoSpeed);
    console.log("当前视窗在图片条中的位置为"+Math.abs(list.offsetLeft));
    if(isStop()){
        changeTime=4000;
        //图片位置向右一张
        index++;
        btn_Index();
        if(isLastImage()){
            returnFirstImage();
            btn_Index();
        }
        console.log("停顿点");
    }
    else{
        changeTime=10;
    }
    //当前图片为最后一张时，下一次播放回到开始播放第一张图片
    timer=setTimeout(turnRight,changeTime);
}
function isStop(){
    if((Math.abs(list.offsetLeft))%pictureWidth==0){

        return true;
    }
    else{
        // changeTime=3;
        return false;
    }
}
function isLastImage(){
    if(list.offsetLeft==-(listWidth-650)){
        return true;
    }
    else{
        return false;
    }
}
function isFirstImage(){
    if(list.offsetLeft==0){
        return true;
    }
    else{
        return false;
    }
}
//返回展示的最后一张图片位置
function returnLastImage(){
    list.style.left=-(listWidth-1300)+"px";
    index=4;
}
//返回展示的第一张图片位置
function returnFirstImage(){
    list.style.left=-650+"px";
    index=0;   
}
//将图片位置与高亮按钮对应
function btn_Index(){
    //将整个图片列表向左移动一张图片的宽度，将下一张图片暴露在视窗,上一张图片被隐藏
        for(let i=0;i<allPictures.length-2;i++){
            if(i!=index){
                btn[i].classList.remove("on");
            }
            else if(i===index){
                btn[i].classList.add("on");
            }
        }
}
function moveLeft(speed){
    list.style.left=list.offsetLeft+speed+"px";
}
function moveRight(speed){
    list.style.left=list.offsetLeft-speed+"px";
}
function moveBeforeImage(){
    moveLeft(moveOneImageSpeed);
    if(isStop()){
        if(isStop()&&isFirstImage()){
            returnLastImage();
            btn_Index();
            console.log(list.offsetLeft);
        }
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveBeforeImage,changeTimer2);
}
function moveNextImage(){
    moveRight(moveOneImageSpeed);
    if(isStop()){
        if(isStop()&&isLastImage()){
            returnFirstImage();
            btn_Index();
        }
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveNextImage,changeTimer2);
}
function moveIndexImage1(){
    indexOffsetLeft=-650;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage1,changeTimer2);
}
function moveIndexImage2(){
    indexOffsetLeft=-1300;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage2,changeTimer2);
}
function moveIndexImage3(){
    indexOffsetLeft=-1950;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage3,changeTimer2);
}
function moveIndexImage4(){
    indexOffsetLeft=-2600;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage4,changeTimer2);
}
function moveIndexImage5(){
    indexOffsetLeft=-3250;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage5,changeTimer2);
}
//点击按钮向左移动一张图片
back.onclick=function(){
    console.log("isPressON");
    if(!isFirstImage()){
        console.log("上一张展示图片");
        index--;
        btn_Index();
        // turnLeft();
        moveBeforeImage();
    }
}
//点击按钮向右移动一张图片
next.onclick=function(){
    console.log("isPressON");
    if(!isLastImage()){
        console.log("下一张展示图片");
        index++;
        btn_Index();
        moveNextImage();
    }
}
//监听所有底部按钮事件
btn[0].onclick=function(){
    index=0;
    // list.style.left=-650+"px";
    moveIndexImage1();
    btn_Index();
}
btn[1].onclick=function(){
    index=1;
    // list.style.left=-1300+"px";
    moveIndexImage2();
    btn_Index();
}
btn[2].onclick=function(){
    index=2;
    // list.style.left=-1950+"px";
    moveIndexImage3();
    btn_Index();
}
btn[3].onclick=function(){
    index=3;
    // list.style.left=-2600+"px";
    moveIndexImage4();
    btn_Index();
}
btn[4].onclick=function(){
    index=4;
    // list.style.left=-3250+"px";
    moveIndexImage5();
    btn_Index();
}
//鼠标移动到视窗，清除定时器，停止播放
container.onmouseenter=function(){
    if(isStop()){
        clearTimeout(timer);
    }
}
//鼠标离开视窗，调用自动轮播函数
container.onmouseleave=function(){
    // turnRight();
    clearTimeout(timer);
    clearTimeout(timer2);
    turnRight();
}
// timer=setInterval(turnRight,changeTime);
timer=setTimeout(turnRight,changeTime);
console.log(timer);
