window.onload = function() {
// Gestion de l'ouverture fermeture du menu d'option
// Ouverture Sign In window
openSignWin = document.getElementById("openSignWin");
if (openSignWin) {
	openSignWin.addEventListener("click",function(e) {
		console.log("click");
		signWin = document.getElementById("signWin");
		if (signWin.style.display=="none") {
			signWin.style.display = "";
		}
		else {
			signWin.style.display = "none";
		}
	});
}
// Ouverture Account Menu
openAccHeaWin = document.getElementById("openAccHeaWin");
if (openAccHeaWin) {
	openAccHeaWin.addEventListener("click",function(e) {
		accountHeaderWin = document.getElementById("accountHeaderWin");
		if (accountHeaderWin.style.display=="none") {
			accountHeaderWin.style.display = "";
		}
		else {
			accountHeaderWin.style.display = "none";
		}
	});
}


}
