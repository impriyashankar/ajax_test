document.addEventListener('DOMContentLoaded',function(event){
	var btn=document.getElementById('btn');

btn.addEventListener("click",function(){
	

var data_link="data/data.json";

var httpRequest=new XMLHttpRequest();


httpRequest.onreadystatechange=function(){
if(httpRequest.readyState == 4)
{
	
	if(httpRequest.status==200)
	{
		
		var new_obj=JSON.parse(httpRequest.responseText);
		
		document.getElementById('name').innerHTML=new_obj.name;
		document.getElementById('country').innerHTML=new_obj.country;
	}
}
}
httpRequest.open("GET",data_link);
httpRequest.send();

});
});