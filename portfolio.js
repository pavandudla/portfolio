

function opentab(tabname){
	var tablinks=document.getElementByClassName('tab-links');
var tabcontents=document.getElementByClassName('tab-contents');

	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab")
}


// ----------------------- javascript for sidemenu bar ---------------------------

function openmenu(){
	var sidemeu=document.getElementById("sidemenu");
	sidemeu.style.right="0px";
}
function closemenu(){
	var sidemeu=document.getElementById("sidemenu");
	sidemeu.style.right="-200px";
}

// ------------------ javascript for Contact form -----------------------------

function submitval()
{
	var name=document.getElementById("Name").value;
	var email=document.getElementById("Email").value;
	var message=document.getElementById("area").value;

	if(name.value=" " )
	{

		document.getElementById("span1").style.visibility="visible";
	}
	if(email.value=" ")
	{
		document.getElementById("span2").style.visibility="visible";
	}
	if(message.value=" ")
	{
		document.getElementById("span3").style.visibility="visible";
	}
}