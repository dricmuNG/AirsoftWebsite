function initApp(){
	var broj=1;
	var pocetnaSlika = document.getElementById("promeniti");
	var slike = ["images/dark-box-pocetna/db1.jpg", 
		"images/dark-box-pocetna/db2.jpg", 
		"images/dark-box-pocetna/db3.jpg", 
		"images/dark-box-pocetna/db4.jpg", 
		"images/dark-box-pocetna/db5.jpg", 
		"images/dark-box-pocetna/db6.jpg", 
		"images/dark-box-pocetna/db7.jpg", 
		"images/dark-box-pocetna/db8.jpg",
		"images/dark-box-pocetna/db9.jpg"];
	function promeni() {
		if (broj >= slike.length)
			pocetnaSlika.style.height = '320px';
    			pocetnaSlika.style.width = '580px';
			pocetnaSlika.src = slike[broj];
			broj++;
			console.log(broj);
		if(broj>slike.length)
		{
			broj=0;
			pocetnaSlika.style.height = '320px';
    			pocetnaSlika.style.width = '580px';
			pocetnaSlika.src = slike[broj];
			broj++;
			console.log(broj);
		}
	};
	pocetnaSlika.addEventListener('click', promeni);

	var forma = document.getElementById("signup");
	var klik = document.getElementById("dugme");
        function prijava(){
        	var unetiEmail = document.getElementById("email").value;
        	var unetoIme = document.getElementById("ime").value;
        	var unetoKorisnicko = document.getElementById("korisnicko").value;
        	window.alert('You have now stored your email address');
        	console.log(unetiEmail);
        	console.log(unetoIme);
		console.log(unetoKorisnicko);
    	}
    	klik.addEventListener('click', prijava);
}

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});