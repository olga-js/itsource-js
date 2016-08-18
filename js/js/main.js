function compareOfNumbers() {

	var a = prompt('Value "A": ');
	var b = prompt('Value "B": ');
	
	if(a != '' && b != '') {
		if (a > b) {		
			alert('A > B');	
		} else if (a === b){
			alert('A = B');
		} else {
			alert('A < B');
		}	
	} else {
		alert('Enter a both of value!');
	}
}

compareOfNumbers();

function getNumberInDegree() {

	var x = prompt('Number: ');
	var y = prompt('Degree: ');

	function multiplication(a, b) {	
		var result = a;
		for (i = 1; i < b; i++) {		
			result *= a;
		}
		return result;
	}

	alert('Result: ' + multiplication(x, y));
}

 getNumberInDegree();


