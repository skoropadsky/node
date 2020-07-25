function calculate(sum){
	var str = sum.match(/[\d\$\*\.\+\-]+/)[0];
	if (str !== sum)	return "400: Bad request";

	var ops = str.match(/[\$\*\.\+\-]|[0-9\.]+/g);
	var middle = [];
	var answer = 0;

	for (var i = 0; i < ops.length; i++) {
		var item = ops[i+1];

		if(/\$/.test(item)){
			middle.push(Number(ops[i]) / Number(ops[i+2]));
			i+=2;
		} else if (/\*/.test(item)) {
			middle.push(Number(ops[i]) * Number(ops[i+2]));
			i+=2;
		} else 
			middle.push(ops[i]);
	}

	answer = Number(middle[0]);
	for (var i = 1; i < middle.length; i++){
		var item = middle[i];
		if (/\+/.test(item)) {
			answer += Number(middle[i+1]);
			i+=1;
		} else if (/\-/.test(item)) {
			answer -= middle[i+1];
			i+=1;
		}
	}

	return Number(answer);

}

calculate('24$2+33-4*5');


