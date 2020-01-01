let input=document.querySelector(".User-phone");
function loadXMLDoc()
{   
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		//构造XHR对象
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//onreadystatechange为Ajax的一个监听机制，该方法异步不断检测与服务端的交互状态并返回协议数据
	xmlhttp.onreadystatechange=function()
	{
		//收到服务器相应，status属性值200为建立连接时的正确值，readyState属性为4表示返回了部分数据，确认响应的规则为Ajax引擎本身制定
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//responText为XHR对象的一个属性，该属性用于存放从服务端获取到的数据，格式为文本格式，需转换为js对象
	//		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			console.log(xmlhttp.responseText);
	//		var jsObject=JSON.parse(xmlhttp.responseText);
	//		console.log(jsObject.showapi_res_body.prov,jsObject.showapi_res_body.city);
	//		let phoneForm=[];
	//		phoneForm.push(jsObject.showapi_res_body.prov);
	//		phoneForm.push(jsObject.showapi_res_body.city);
	//		console.log(phoneForm);
	//		document.getElementById("myDiv").innerHTML=phoneForm;
		}
	}
	//open方法为建立数据请求做准备，第一个参数给请求方式，第二为请求的数据API接口，第三为是否将请求设置为异步
	xmlhttp.open("GET","http://apis.juhe.cn/mobile/get?phone="+input.value+"&key=d892d52b2d16214907f49c1f257ea716“,true);
	//真正建立请求的XHR方法，使用get方法时参数为null值，数据不缓存到本地
	xmlhttp.send();
	
}
