//your JS code here. If required.
const btn=document.getElementById("incrementBtn");
const counter=document.getElementById("counter")
btn.onclick=(()=>{
	let currentValue=counter.textContent;
	alert(currentValue);
	let incrementedValue = parseInt(counter.textContent) + 1;
	counter.textContent=incrementedValue;
	})