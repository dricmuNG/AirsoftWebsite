function initApp(){
	var broj=0;
	var pocetnaSlika = document.getElementById("promeniti");
	var pocetniNaslov = document.getElementById('naslov');
	var pocetniOpis = document.getElementById('opis');
	var slike = ["images/dark-box-oprema/db1.jpg", 
		"images/dark-box-oprema/db2.jpg", 
		"images/dark-box-oprema/db3.jpg", 
		"images/dark-box-oprema/db4.jpg", 
		"images/dark-box-oprema/db5.jpg", 
		"images/dark-box-oprema/db6.jpg", 
		"images/dark-box-oprema/db7.jpg", 
		"images/dark-box-oprema/db8.jpg"];
	var naslovi = ["SVD Dragunov", 
		"M16A1", 
		"M4A1", 
		"M4A1 Keymod", 
		"MP5SD", 
		"AK-74M", 
		"AUG A1", 
		"Colt M1911"];
	var opisi = ["Name	Sniper rifle replica CYMA CM.057T\nMuzzle velocity [FPS] ~420\nGearbox version	Special Gearbox\nFire mode	Single\nMade of	plastic + metal\nLength [mm]	838/1090\nInner barrel length [mm]	690\nWeight [g]	3500\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	200\nHop-Up	Yes\nBlow Back	No\nNAPOMENA: replika još nije predviđena za igranje. Nedostaje optički nišan", 
		"Name	Rifle replica Jing Gong 1601MG\nMuzzle velocity [FPS] ~360\nGearbox version	Gearbox v2\nFire mode	Single, Auto\nMade of	plastic + metal\nLength [mm]	995\nInner barrel length [mm]	509\nWeight [g]	2550\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	190\nHop-Up	Yes\nBlow Back	No", 
		"Name	Rifle replica CYMA CM.515\nMuzzle velocity [FPS] 380-400\nGearbox version	Gearbox v2\nFire mode	Single, Auto\nMade of	plastic + metal\nLength [mm]	792\nInner barrel length [mm]	380\nWeight [g]	1880\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	300\nHop-Up	Yes\nBlow Back	No", 
		"Name	Rifle replica CYMA CM.506\nMuzzle velocity [FPS] 380-400\nGearbox version	Gearbox v2\nFire mode	Single, Auto\nMade of	plastic + metal\nLength [mm]	700\nInner barrel length [mm]	295\nWeight [g]	1880\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	300\nHop-Up	Yes\nBlow Back	No", 
		"Name	Rifle replica Jing Gong 068 S5\nMuzzle velocity [FPS] 330-350\nGearbox version	Gearbox v2\nFire mode	Single, Auto\nMade of	plastic\nLength [mm]	778\nInner barrel length [mm]	220\nWeight [g]	2210\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	240\nHop-Up	Yes\nBlow Back	No", 
		"Name	Rifle replica CYMA CM.031\nMuzzle velocity [FPS] 420\nGearbox version	Gearbox v3\nFire mode	Single, Auto\nMade of	plastic + metal\nLength [mm]	710\nInner barrel length [mm]	455\nWeight [g]	2650\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	550\nHop-Up	Yes\nBlow Back	No", 
		"Name	Rifle replica Jing Gong AU-2G\nMuzzle velocity [FPS] 360\nGearbox version	Gearbox v3\nFire mode	Single, Auto\nMade of	ABS + aluminium\nLength [mm]	805\nInner barrel length [mm]	510\nWeight [g]	3505\nBattery voltage [V]	8,4\nBattery capacity [mAh]	1200\nBattery included	Yes\nMagazine type	hi-cap\nMagazine capacity [pcs.]	330\nHop-Up	Yes\nBlow Back	No", 
		"Name	Pistol replica Army Armament R27-S\nMuzzle velocity [FPS] 320\nFire mode	Single\nMade of	aluminium\nLength [mm]	220\nInner barrel length [mm]	115\nWeight [g]	920\nMagazine type	Green Gas\nMagazine capacity [pcs.]	25\nHop-Up	Yes\nBlow Back	Yes"];
	function promeni() {
		if (broj >= slike.length)
			pocetnaSlika.style.height = '306px';
    	pocetnaSlika.style.width = '680px';
			pocetnaSlika.src = slike[broj];
			pocetniNaslov.innerText = naslovi[broj];
			pocetniOpis.innerText = opisi[broj];
			broj++;
			console.log(broj);
		if(broj>slike.length)
		{
			broj=0;
			pocetnaSlika.style.height = '306px';
    	pocetnaSlika.style.width = '680px';
			pocetnaSlika.src = slike[broj];
			pocetniNaslov.innerText = naslovi[broj];
			pocetniOpis.innerText = opisi[broj];
			broj++;
			console.log(broj);
		}
	};
	pocetnaSlika.addEventListener('click', promeni);

}
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});