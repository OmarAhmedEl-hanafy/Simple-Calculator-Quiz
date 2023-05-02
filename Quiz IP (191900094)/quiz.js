function add() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 + num2;
    // console.log(result);
	document.getElementById("result").innerHTML = result;
}

function subtract() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 - num2;
    // console.log(result);
	document.getElementById("result").innerHTML = result;
}

function Clear() {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("result").innerHTML = "";
    // console.log(num1.value);
    // console.log(num2.value);
    // console.log(result.value);
}
