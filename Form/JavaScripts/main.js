let container=document.querySelector('.container');
let formContainer=document.querySelector(".survey-form");
let labelStyle=document.querySelectorAll('.label');
let headText=document.querySelector(".head");
let radioInput=document.querySelectorAll(".radio-input");
let checkboxInput=document.querySelectorAll(".checkboxs");
let submitButton=document.querySelector(".submit-button");

// console.log(radioInput);
// console.log(checkboxInput);
container.onmouseenter=function(){
    formContainer.style.backgroundColor='rgba(216,57,136, 0.8)';
    console.log("实体表单容器渲染为粉色透明");
    changeAllLabelWhiteColor();
    headText.style.color="#fff";
}
container.onmouseleave=function(){
    formContainer.style.backgroundColor="rgba(255,255,255,0)";
    console.log("实体表单容器渲染为全透明,由伪元素进行毛玻璃渲染");
    changeAllLabelBloodColor();
    headText.style.color="#d83988";
}
// 改变带label类的元素文本颜色为血红色
function changeAllLabelBloodColor(){
    for(let i=0;i<labelStyle.length;i++){
        labelStyle[i].style.color="#b8185b";
    }
}
// 改变带label类的元素文本颜色为纯白色
function changeAllLabelWhiteColor(){
    for(let i=0;i<labelStyle.length;i++){
        labelStyle[i].style.color="#fff";
    }
}
function isRadioChecked(){
    for(let i=0;i<radioInput.length;i++){
        if(radioInput[i].checked==true){
            console.log("有一个radio被选中");
            return true;
        }
    }
    return false;
}
function isCheckboxChecked(){
    for(let i=0;i<checkboxInput.length;i++){
        if(checkboxInput[i].checked==true){
            console.log("有一个checkbox被选中");
            return true;
        }
    }
    return false;
}

// headText.onclick=function(){
//     console.log(isRadioChecked());
//     console.log(isCheckboxChecked());
// }

submitButton.onclick=function(){
    if(isRadioChecked()&&isCheckboxChecked()){
        alert("提交成功!");
    }
    else if(isRadioChecked()==false){
        alert("未选择最喜欢的一类乐器!");
    }
    else if(isCheckboxChecked()==false){
        alert("未选择至少一样最关注的内容!");
    }
}

