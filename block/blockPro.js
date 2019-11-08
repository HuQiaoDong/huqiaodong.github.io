 /**@type {HTMLElement} */
let year_drop=document.getElementById("year-select");
let month_drop=document.getElementById("month-select");
let day_drop=document.getElementById("day-select");
let hour_drop=document.getElementById("hour-select");
let minute_drop=document.getElementById("minute-select");
let second_drop=document.getElementById("second-select");
function setTime(){
    let newDate=new Date();
    let from_year=newDate.getFullYear();
    for(let i=from_year-33;i<from_year+33;i++){
        year_drop.add(new Option(i+"年",i));
    }
    for(let j=1;j<13;j++){
        month_drop.add(new Option(j+"月"),j);
    }
    for(let i=0;i<24;i++){
        hour_drop.add(new Option(i+"点"),i);
    }
    for(let i=0;i<60;i++){
        minute_drop.add(new Option(i+"分"),i);
    }
    for(let i=0;i<60;i++){
        second_drop.add(new Option(i+"秒"),i)
    }
    let month=newDate.getMonth()+1;
    let day=newDate.getUTCDate();
    let hours=newDate.getHours();
    let minutes=newDate.getMinutes();
    let seconds=newDate.getSeconds();
}

function isLeapyear(year){
    if((year%400==0&&year%100!=0)||year%400==0){
        return true;
    }
    else{
        console.log("不为闰年");
    }
}
function addZero(x){
    if(x<10){
        x="0"+x;
    }
    return x;
}
function weekday(day){
    weekday=["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
    return weekday[day];
}
function year_to_month(){
    if(isLeapyear(year_drop.value)){
        writeday();
        return true;
    }
    else{
        return false;
    }
}
function writeday(){
    month_day[1]=29;
}
month_day=[31,28,31,30,31,30,31,31,30,31,30,31]//
function month_to_day(){
    day_drop.length=1;
    console.log("改变");
    for(let j=0;j<=month_day[(month_drop.value)];j++){
        day_drop.add(new Option(j+"日",j));
        console.log("change");
    }
}//根据月份判断是31天还是30天
setTime();
year_drop.onchange=function(){
    year_to_month();
    month_to_day();
}
month_drop.onchange=function(){
    year_to_month();
    month_to_day();
}