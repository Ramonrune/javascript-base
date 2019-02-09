// n usar global var variavelGlobal = "";
//colocar dentro do escopo
(function(){
	var escopoLocal,
	    escopoGlobal,
	    foo,
	    obj,
	    array;
	escopoLocal = "foo";
	console.log(escopoLocal);
	//espaços entre contextos diferentes
	obj = {
		foo: "bar",//usar aspass duplas, alguns compiladores n entendem
		bar: "foo",
		foobar: "oi"		
	};

	array = [
		1,
		2,
		3
	];

})();
