var curNum ;
var curSym ;
var exp ;
var result ;

/* Function to Initialize Calculator */
function init(){
	curNum = "" ;
	curSym = "+" ;
	exp = "" ;
	result = 0 ;
}

/* Function to Handle Key Press */
function press(key){
	if(curSym == "="){
		init();
	}
	if(key=="on"){
		init() ;
	}
	else if(key=="erase"){
		if(curNum.length > 0) {
			curNum = curNum.substr(0,curNum.length - 1) ;
		}
	}
	else if(key=="+" || key=="-"){
		if(curNum != ""){
			var num = parseFloat(curNum);
			exp += curNum + " " + key + " " ;
			calculate(num);
			curNum = "" ;
			curSym = key ;
		}
		else{
			curNum += key ;
		}
	}
	else if(key=="x" || key=="/"){
		if(curNum!=""){
			var num = parseFloat(curNum);
			exp = "(" + exp + curNum + ") "+key+" " ;
			calculate(num);
			curNum = "" ;
			curSym = key ;
		}
	}
	else if(key!="="){
		curNum += key ;
	}
	
	updateView();
	
	if(key=="="){
		if(num!=""){
			var num = parseFloat(curNum);
			exp += curNum + " = ";
			calculate(num);
			curNum = "" ;
			curSym = key;
		}
		updateView();
		element("input").innerHTML = result.toFixed(2);
	}
	
	
}

/* Function for Calculating Result */
function calculate(num){
	if(curSym=="+"){
		result += num;
	}
	else if(curSym=="-"){
		result -= num ;
	}
	else if(curSym=="/"){
		result /= num ;
	}
	else if(curSym=="x"){
		result *= num ;
	}
}

/* Function to Update View */
function updateView(){
	element("expression").innerHTML = exp ;
	element("input").innerHTML = curNum ;
}

/* Function to Return Element By its Id */
function element(id){
	return document.getElementById(id) ;
}