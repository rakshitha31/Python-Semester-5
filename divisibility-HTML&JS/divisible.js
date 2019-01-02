function div(){
var s1="The number is divisible by 3!";
var s2="The number is divisible by 7!";
var s3="Not divisible by both!";


	if(parseInt(document.getElementById('num').value)%3===0){
			document.getElementById('ans').innerHTML=s1;
		}
	if(parseInt(document.getElementById('num').value)%7===0){
			document.getElementById('ans').innerHTML=s2;
		}
	if(parseInt(document.getElementById('num').value)%3!==0 && parseInt(document.getElementById('num').value)%7!==0){
		document.getElementById('ans').innerHTML=s3;
	}
}
