function calculate(){
var num1=parseInt(document.getElementById('num1').value)
var num2=parseInt(document.getElementById('num2').value)
var answer="";
if(document.getElementById('add').checked){

	answer=num1+num2;

}
if(document.getElementById('sub').checked){
	
	answer=num1-num2;

}
if(document.getElementById('mul').checked){
	answer=num1*num2;

}
if(document.getElementById('div').checked){
	if(num2!=0){
	answer=num1/num2;
	}else{alert('Divide by zero error!')}
	

}
if(document.getElementById('add').checked){
	answer=num1+num2;

}
document.getElementById('ans').innerHTML=answer;

}

