var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16,
	/*apresentar: function(){
		console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
	}*/
	apresentar : apresentacao
};

function apresentacao(){
	console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + ".");
}

console.log(obj.nome);
obj.apresentar();