var a=[2,5,4,7,43,67,36,11,9,28,33];
console.log(a);
var len=a.length;
console.log(len);
function sort(){
    for(var i=0;i<len-1;i++){
        console.log('外层循环轮数='+i);
        for(j=0;j<len-i-1;j++){
            var temp;
            console.log(j);
            if(a[j]>a[j+1]){
                temp=a[j+1];
                a[j+1]=a[j];
                a[j]=temp;
                console.log(a);
            }
        }
    }
}
sort();
console.log(a);

