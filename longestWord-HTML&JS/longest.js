function longest(){
	var txt=document.getElementById('txtarea').value.split(' ');
	var i;
	var longestlength=0;
	var longestword;
	for(i=0;i<txt.length;i++){
		if(txt[i].length>longestlength){
			longestlength=txt[i].length;
			longestword=txt[i];
		}
	
	}
document.getElementById('ans').innerHTML=longestword;
}
