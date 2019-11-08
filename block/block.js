

function weekday1(weekday){
 switch(weekday){
    case 1:
        weekday="星期一";
        break;
    case 2:
        weekday="星期二";
        break;
    case 3:
        weekday="星期三";
        break;
    case 4:
        weekday="星期四";
        break;
    case 5:
        weekday="星期五";
        break;
    case 6:
        weekday="星期六";
        break;
    case 7:
        weekday="星期日";
        break;
 }
 return weekday;
}
let result=document.getElementById("result");
console.log(result);

function addZero(time){
    if(time<10){
        time="0"+time;
    }
    return time;
}

function Date1(){
    let newdate=new Date();
    let year=newdate.getFullYear();
    let month=newdate.getMonth()+1;
    let day=newdate.getUTCDate();
    let getweek=newdate.getDay();
    let hours=newdate.getHours();
    let minutes=newdate.getMinutes();
    let seconds=newdate.getSeconds();
    let week=weekday1(getweek);
    let h=addZero(hours);
    let m=addZero(minutes);
    let s=addZero(seconds);
    result.innerHTML=year+"年"+month+"月"+day+"日"+week+h+":"+m+":"+s;
    setTimeout("Date1()",200);
}
Date1();

