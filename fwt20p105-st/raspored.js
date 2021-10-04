var path = window.location.pathname;
var page = path.split("/").pop();
if(page === 'raspored.html')
    FiltrirajRaspored.postaviRaspored(document.getElementById("raspored-kontejner"));
if(page === 'raspored2.html')
    FiltrirajRaspored.postaviRaspored(document.getElementById("raspored-kontejner-2"));
if(page === 'raspored3.html')
    FiltrirajRaspored.postaviRaspored(document.getElementById("raspored-kontejner-3"));

function ocistiFormu(index){
    const array = ["nazivPredmeta", "tipAktivnosti", "trajanje", "dan"];
    for(let i = 0; i < array.length; i++)
        if(i !== index) document.getElementById(array[i]).value = "";
}

document.getElementById("nazivPredmeta").addEventListener("input", () =>  {
    ocistiFormu(0);
});

document.getElementById("tipAktivnosti").addEventListener("input", () =>  {
    ocistiFormu(1);
});

document.getElementById("trajanje").addEventListener("input", () =>  {
    ocistiFormu(2);
});

document.getElementById("dan").addEventListener("input", () =>  {
    ocistiFormu(3);
});

document.getElementById("dugmeFiltriraj").addEventListener("click", (event) => {

   const nazivPredmetaValue = document.getElementById("nazivPredmeta").value;
   const tipAktivnostiValue = document.getElementById("tipAktivnosti").value;
   const trajanjeValue = document.getElementById("trajanje").value;
   const danValue = document.getElementById("dan").value;
   if(nazivPredmetaValue) FiltrirajRaspored.filtrirajPredmet(nazivPredmetaValue);
   if(tipAktivnostiValue) FiltrirajRaspored.filtrirajTip(tipAktivnostiValue);
   if(trajanjeValue !== '' && !isNaN(parseInt(trajanjeValue))) FiltrirajRaspored.filtrirajTrajanje(parseInt(trajanjeValue));
   if(danValue && danValue[0] === '-') FiltrirajRaspored.filtrirajProslo(danValue.substring(1));
   if(danValue && danValue[0] === '+') FiltrirajRaspored.filtrirajBuduce(danValue.substring(1));

   if(!nazivPredmetaValue && !tipAktivnostiValue && !trajanjeValue && (trajanjeValue === '' || isNaN(parseInt(trajanjeValue))) && !danValue){
       FiltrirajRaspored.filtrirajPredmet("");
   }
});
