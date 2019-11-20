let barrageDiv=document.querySelector(".barrage-div");
let input=document.querySelector(".barrage-input");
let goButton=document.querySelector(".go");
let clearButton=document.querySelector(".clear");
let body=document.querySelector("body");
let allBarrage_div=document.getElementsByClassName("right");
// let timer1=null;
// let timer2=null;
// let timer3=null;
// let timer4=null;
// let timer5=null;
// let timer6=null;
function Barrage(){
    this.isTurnTimer=true;
    this.launchNum=[];
    this.arrdiv=[];
    this.posX=0;
    this.posY=0;
    this.BarrageDiv_width=barrageDiv.offsetWidth;
    this.Launch_barrage=function(){
        goButton.onclick=function(){
            barrage.launchNum.push(true);
            // console.log(barrage.launchNum);
            if(barrage.posY>=420){
               barrage.posY=0;
            }
            let a=document.createElement("div");
            a.innerHTML=input.value;
            // console.log(a.style.left);    
            a.className="right";
            a.style.color="#"+barrage.createRandomColor();
            //纵坐标移动生效
            a.style.top=barrage.posY+"px"; 
            barrageDiv.appendChild(a);
            barrage.arrdiv.push(a);
         //   console.log(barrage.arrdiv);
            //只有第一次点击发射按钮时启动定时器进行弹幕移动
            if(barrage.isTurnTimer){
                barrage.move();
            }  
            //创建的第二个弹幕元素在地图上纵坐标往下70个像素
            barrage.posY=barrage.posY+70;
            barrage.isTurnTimer=false;
        }
    }
    this.clear_barrage=function(){
        clearButton.onclick=function(){
            barrageDiv.innerHTML="";
            window.clearTimeout(1);
            for(let j=0;j<allBarrage_div.length;j++){
                document.removeChild(allBarrage_div[j]);
            }
        }
    }
    //产生一组随机的6位十六进制值，用来给弹幕文本添加随机的颜色
    this.createRandomColor=function(){
        let colorRed=Math.floor(Math.random()*255);
        let colorRedHex=colorRed.toString(16);
        // console.log("红色为"+colorRedHex);
        let colorGreen=Math.floor(Math.random()*255);
        let colorGreenHex=colorGreen.toString(16);
        // console.log("绿色为"+colorGreenHex);
        let colorBlue=Math.floor(Math.random()*255);
        let colorBlueHex=colorBlue.toString(16);
        // console.log("蓝色为"+colorBlueHex);
        let randomColor=colorRed+colorGreen+colorBlue;
        return randomColor;
        // console.log("位置为"+a);
    }
    //控制弹幕的移动
    this.move=function(){
        // let a=document.getElementsByClassName("right");
        //  6条弹道
        let barrage1=new Barrage();
        let barrage2=new Barrage();
        let barrage3=new Barrage();
        let barrage4=new Barrage();
        let barrage5=new Barrage();
        let barrage6=new Barrage();
        //存放6个弹幕对象的数组
        let arrBarrage=[];
        arrBarrage.push(barrage1,barrage2,barrage3,barrage4,barrage5,barrage6);
        // console.log(arrBarrage);
        barrage1.posX=6;
        barrage2.posX=7;
        barrage3.posX=8;
        barrage4.posX=9;
        barrage5.posX=10;
        barrage6.posX=11;
        let a=document.getElementsByClassName("right");
        for(let i=0;i<barrage.arrdiv.length;i++){
            barrage.arrdiv[i].style.left=barrage.arrdiv[i].offsetLeft-1+"px";
            if(barrage.arrdiv[i].offsetLeft<=0){
                // barrage.arrdiv[i].right=0+"px";
                barrage.arrdiv[i].innerHTML="";
                // barrageDiv.removeChild(barrage.arrdiv[i]);
                // a[0].parentNode.removeChild(a[0]);
            }
        }
        console.log(barrage.arrdiv[0].offsetLeft);
        setTimeout(barrage.move,10);
    
    //     //获取所有已被创建的弹幕元素列表
    //     let a=document.getElementsByClassName("right");
    //     for(let i=0;i<6;i++){
    //         //判断每个弹道的弹幕元素横坐标值是否超过弹幕地图
    //         if(arrBarrage[i].posX>arrBarrage[i].BarrageDiv_width-30){
    //             //超过地图范围，横坐标归0
    //             arrBarrage[i].posX=0;
    //         }
    //         //弹幕元素的移动
    //     }
    //     for(let j=0;j<a.length;j++){
    //         a[j].style.right=arrBarrage[j].posX+"px";
    //         if(a[j]){
    //             arrBarrage[j].posX++;
    //         }
    //     }
    //     setTimeout(barrage.move,10);
    //     // console.log("弹幕1的x值为"+barrage1.posX);
    //     // console.log("弹幕2的x值为"+barrage2.posX);
        
     }
}

let barrage=new Barrage();
barrage.Launch_barrage();
barrage.clear_barrage();
barrage.createRandomColor();
// document.body.style.backgroundColor="#"+barrage.createRandomColor();