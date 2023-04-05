let wyswietlacz = document.getElementById("wysw"); //wyświetlacz

let p0 = document.getElementById("p0"); //klawisz 7
let p1 = document.getElementById("p1"); //klawisz 8
let p2 = document.getElementById("p2"); //klawisz 9
let p3 = document.getElementById("p3"); //klawisz '/'

let p4 = document.getElementById("p4"); //klawisz 4
let p5 = document.getElementById("p5"); //klawisz 5
let p6 = document.getElementById("p6"); //klawisz 6
let p7 = document.getElementById("p7"); //klawisz '*'

let p8 = document.getElementById("p8"); //klawisz 1
let p9 = document.getElementById("p9"); //klawisz 2
let p10 = document.getElementById("p10"); //klawisz 3
let p11 = document.getElementById("p11"); //klawisz '-'

let p12 = document.getElementById("p12"); //klawisz 0
let p13 = document.getElementById("p13"); //klawisz '.'
let p14 = document.getElementById("p14"); //klawisz C
let p15 = document.getElementById("p15"); //klawisz '+'

let p16 = document.getElementById("obl"); //klawisz =

let ciag = "";

p0.addEventListener("click", function() { wpiszZnak(7); });
p1.addEventListener("click", function() { wpiszZnak(8); });
p2.addEventListener("click", function() { wpiszZnak(9); });
p3.addEventListener("click", function() { wpiszZnak("/"); });

p4.addEventListener("click", function() { wpiszZnak(4); });
p5.addEventListener("click", function() { wpiszZnak(5); });
p6.addEventListener("click", function() { wpiszZnak(6); });
p7.addEventListener("click", function() { wpiszZnak("*"); });

p8.addEventListener("click", function() { wpiszZnak(1); });
p9.addEventListener("click", function() { wpiszZnak(2); });
p10.addEventListener("click", function() { wpiszZnak(3); });
p11.addEventListener("click", function() { wpiszZnak("-"); });

p12.addEventListener("click", function() { wpiszZnak(0); });
p13.addEventListener("click", function() { wpiszZnak("."); });
p14.addEventListener("click", function() { czyscWyswietlacz(); }); //czyść wyświetlacz
p15.addEventListener("click", function() { wpiszZnak("+"); });

p16.addEventListener("click", function() { obliczCiag(); });

function wpiszZnakKlawisza(event)
{
	let klawisz = false;
	let x = event.key; //przechowuje znak wygenerowany nacisnieciem klawisza
	switch(x)
	{
		case "0":
			klawisz = true;
		break;
		case "1":
			klawisz = true;
		break;
		case "2":
			klawisz = true;
		break;
		case "3":
			klawisz = true;
		break;
		case "4":
			klawisz = true;
		break;
		case "5":
			klawisz = true;
		break;
		case "6":
			klawisz = true;
		break;
		case "7":
			klawisz = true;
		break;
		case "8":
			klawisz = true;
		break;
		case "9":
			klawisz = true;
		break;
		case "+":
			klawisz = true;
		break;
		case "-":
			klawisz = true;
		break;
		case "*":
			klawisz = true;
		break;
		case "/":
			klawisz = true;
		break;
		case ".":
			klawisz = true;
		break;
		case ",":
			x = ".";
			klawisz = true;
		break;
		case "=":
			klawisz = true;
		break;
		case "C":
			klawisz = true;
		break;
		case "c":
			klawisz = true;
		break;
		case "Enter":
			klawisz = true;
		break;
		case "Escape":
			klawisz = true;
		break;
		default:
			klawisz = false;
	}
	if (klawisz == true)
		if (x == "=" || x == "Enter")
		{
			obliczCiag();
		}
		else
		if (x == "Escape" || x == "C" || x == "c")
			czyscWyswietlacz();
		else
			wpiszZnak(x);
}

function wpiszZnak(znak)
{
	ciag += znak;
	wyswietlacz.innerHTML = ciag;
}

function czyscWyswietlacz()
{
	ciag = "";
	wyswietlacz.innerHTML = "";
}

function obliczCiag()
{
	let wynik = eval(ciag);
	wyswietlacz.innerHTML = wynik;
	ciag = "";
}

