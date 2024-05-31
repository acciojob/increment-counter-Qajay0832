//your JS code here. If required.
const btn=document.getElementById("incrementBtn");
const counter=document.querySelector("#counter")
btn.onclick=(()=>{
	alert(counter.textContent);
	counter.textContent = parseInt(counter.textContent) + 1
	})