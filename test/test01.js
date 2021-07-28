function tiers(index) {
	var pinturaAsteriscos = "";
	for (var i = 0; i <= index; i++) {
		for (var j = 0; j < index - i && i != 0; j++) {//añadimos los espacios para hacer la matriz inversa 
			pinturaAsteriscos += " ";
		}
		for (var j = 0; j < i; j++) {
			pinturaAsteriscos += "*";//añadimos los asteriscos al final gracias a los espacios, siendo la misma cantidad de asteriscos que posicion de linea
		}
		if (pinturaAsteriscos != "") {//si no es vacio, salto de linea despues de cada iteraccion
			pinturaAsteriscos += "\n";

		}
	}
	return pinturaAsteriscos;
}
module.exports = tiers;
