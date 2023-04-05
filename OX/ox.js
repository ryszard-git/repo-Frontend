var p = []; // uchwyty do div'ów
var wpiszX; // wpisać X (true) czy O (false) - zmienna wskaźnikowa
var litera; // przechowuje X lub O
var trafienia = []; // stan gry
var blokujPole = []; //flaga blokady pola po wstawieniu znaku
var result = []; // zawiera XXX lub OOO
var wygrana = false; //zmienna wskaźnikowa - czy jest wygrana
var liczPola = 0; //licznik zablokowanych pól

// ustawianie zmiennej blokujPole na 'false' i zerowanie zmiennej trafienia
for (var i = 0; i < 9; i++) {
	blokujPole[i] = false;
	trafienia[i] = "";
}

let tura = document.getElementById("tura"); //tura - informuje czyj ruch
let ktoPierwszy = document.forms.pierwszy.wybor.value; // kto rozpoczyna grę

switch(ktoPierwszy)
{
	case "X":
		tura.innerHTML = "Tura: X";
		wpiszX = true;
	break;
	
	case "O":
		tura.innerHTML = "Tura: O";
		wpiszX = false;
}

document.getElementById("zaczynax").addEventListener("change", function()
{
	tura.innerHTML = "Tura: X";
	wpiszX = true;	
});

document.getElementById("zaczynao").addEventListener("change", function()
{
	tura.innerHTML = "Tura: O";
	wpiszX = false;
});

p[0] = document.getElementById("p0");
p[1] = document.getElementById("p1"); 
p[2] = document.getElementById("p2");

p[3] = document.getElementById("p3");
p[4] = document.getElementById("p4");
p[5] = document.getElementById("p5");

p[6] = document.getElementById("p6");
p[7] = document.getElementById("p7");
p[8] = document.getElementById("p8");

for (let i=0; i<=8; i++)
	p[i].addEventListener("click", function() { kliknij(i); }); //ustawianie listenerów dla pól

function kliknij(nr) {
	if (blokujPole[nr] == false) {
		if (wpiszX == true) {
			litera = "X";
			wpiszX = false;
			tura.innerHTML = "Tura: O";
		} else if (wpiszX == false) {
			litera = "O";
			wpiszX = true;
			tura.innerHTML = "Tura: X";
		}
		p[nr].innerHTML = litera;
		blokujPole[nr] = true;
		liczPola++;
		p[nr].style.cursor = "default";
		trafienia[nr] = litera;
		wynik();
	}
}

function wynik() {
	var x = document.getElementsByClassName("wynik"); //uchwyt pola 'wynik'

	result[0] = trafienia[0] + trafienia[1] + trafienia[2];
	result[1] = trafienia[3] + trafienia[4] + trafienia[5];
	result[2] = trafienia[6] + trafienia[7] + trafienia[8];
	result[3] = trafienia[0] + trafienia[3] + trafienia[6];
	result[4] = trafienia[1] + trafienia[4] + trafienia[7];
	result[5] = trafienia[2] + trafienia[5] + trafienia[8];
	result[6] = trafienia[0] + trafienia[4] + trafienia[8];
	result[7] = trafienia[2] + trafienia[4] + trafienia[6];

	for (var i = 0; i < 8; i++)
	{
		if (result[i] == "XXX" || result[i] == "OOO") 
		{
			wygrana = true;
			tura.style.visibility = "hidden";
			let zwyc = result[i].charAt(0);
			x[0].innerHTML = "Zwycięzcą jest: " + zwyc;
			blokujWszystkiePola();
		}
	}
	if (liczPola == 9 && wygrana == false)
	{
		x[0].innerHTML = "Gra nierozstrzygnięta";
		tura.style.visibility = "hidden";
	}
	document.getElementById("btn").addEventListener("click", function() { location.reload() }); //odświeżenie strony
}

function blokujWszystkiePola() {
	for (var i = 0; i < 9; i++) {
		blokujPole[i] = true;
		p[i].style.cursor = "default";
		}
}

