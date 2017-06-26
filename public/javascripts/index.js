
// Gestion de l'ouverture fermeture du menu d'option
// Ouverture Sign In window
document.getElementById("openSignWin").addEventListener("click",function(e) {
	console.log("click");
	signWin = document.getElementById("signWin");
	if (signWin.style.display=="none") {
		signWin.style.display = "";
	}
	else {
		signWin.style.display = "none";
	}
});
// Ouverture Account Menu
document.getElementById("openAccHeaWin").addEventListener("click",function(e) {
	accountHeaderWin = document.getElementById("accountHeaderWin");
	if (accountHeaderWin.style.display=="none") {
		accountHeaderWin.style.display = "";
	}
	else {
		accountHeaderWin.style.display = "none";
	}
});
