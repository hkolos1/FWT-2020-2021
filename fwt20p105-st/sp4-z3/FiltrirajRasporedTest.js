let assert = chai.assert;
const raspored1 = document.getElementById("raspored-kontejner");
const raspored2 = document.getElementById("raspored-kontejner-2");
const raspored3 = document.getElementById("raspored-kontejner-3");

const raspored1_innerHTML = raspored1.innerHTML;
const raspored2_innerHTML = raspored2.innerHTML;
const raspored3_innerHTML = raspored3.innerHTML;

function prebrojiAktivnosti(raspored) {
    let brojac = 0;
    const tabela = raspored.getElementsByTagName("table")[0];
    const tbody = tabela.children[0];
    const redovi = tbody.children;
    for(let i = 0; i < redovi.length; i++){
        const celije = redovi[i].children;
        for(let j = 0; j < celije.length; j++){
            const celija = celije[j];
            if(celija.classList.contains("color"))
                brojac++;
        }
    }
    return brojac;
}

describe('Testovi', function() {

    beforeEach(function (){
        raspored1.innerHTML = raspored1_innerHTML;
        raspored2.innerHTML = raspored2_innerHTML;
        raspored3.innerHTML = raspored3_innerHTML;
    });

    after(function(){
        raspored1.innerHTML = "";
        raspored2.innerHTML = "";
        raspored3.innerHTML = "";
    })

    describe('[FiltrirajRaspored] Testiranje', function() {;
        it('[FiltrirajPredmet/Raspored1] Test 1 - filter po praznom stringu' , function() {
           FiltrirajRaspored.postaviRaspored(raspored1);
           let stariBrojAktivnosti = prebrojiAktivnosti(raspored1);
           FiltrirajRaspored.filtrirajPredmet("");
           let noviBrojAktivnosti = prebrojiAktivnosti(raspored1);
           assert.equal(stariBrojAktivnosti, noviBrojAktivnosti, "Nista se ne treba skloniti iz rasporeda");
        });

        it('[FiltrirajPredmet/Raspored2] Test 2 - filter po "WT", rezultat su dvije aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored2);
            FiltrirajRaspored.filtrirajPredmet("WT");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored2);
            assert.equal(2, noviBrojAktivnosti, "Trebale bi biti prisutne dvije aktivnosti");
        });
        it('[FiltrirajPredmet/Raspored3] Test 3 - filter po "M", rezultat su tri aktivnosti aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored3);
            FiltrirajRaspored.filtrirajPredmet("M");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored3);
            assert.equal(3, noviBrojAktivnosti, "Trebale bi biti prisutne tri aktivnosti");
        });

        it('[FiltrirajTip/Raspored1] Test 1 - filter po praznom stringu' , function() {
            FiltrirajRaspored.postaviRaspored(raspored1);
            let stariBrojAktivnosti = prebrojiAktivnosti(raspored1);
            FiltrirajRaspored.filtrirajTip("");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored1);
            assert.equal(stariBrojAktivnosti, noviBrojAktivnosti, "Nista se ne treba skloniti iz rasporeda");
        });

        it('[FiltrirajTip/Raspored2] Test 2 - filter po "tutorijal", rezultat su tri aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored2);
            FiltrirajRaspored.filtrirajTip("tutorijal");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored2);
            assert.equal(3, noviBrojAktivnosti, "Trebale bi biti prisutne tri aktivnosti");
        });
        it('[FiltrirajTip/Raspored3] Test 3 - filter po "Nepostojeći tip", rezultat je nula aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored3);
            FiltrirajRaspored.filtrirajTip("Nepostojeći tip");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored3);
            assert.equal(0, noviBrojAktivnosti, "Trebalo bi biti pristupno nula aktivnosti");
        });

        it('[FiltrirajTrajanje/Raspored1] Test 1 - filter po 0 minuta, rezultat je nula aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored1);
            FiltrirajRaspored.filtrirajTrajanje(0);
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored1);
            assert.equal(0, noviBrojAktivnosti, "Trebalo bi biti pristupno nula aktivnosti");
        });

        it('[FiltrirajTrajanje/Raspored2] Test 2 - filter po 10000 minuta, rezultat su sve aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored2);
            let stariBrojAktivnosti = prebrojiAktivnosti(raspored2);
            FiltrirajRaspored.filtrirajTrajanje(10000);
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored2);
            assert.equal(stariBrojAktivnosti, noviBrojAktivnosti, "Trebale bi biti prisutne sve aktivnosti");
        });
        it('[FiltrirajTrajanje/Raspored3] Test 3 - filter po 120 minuta, rezultat je 4 aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored3);
            FiltrirajRaspored.filtrirajTrajanje(120);
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored3);
            assert.equal(4, noviBrojAktivnosti, "Trebale bi biti prisutne četiri aktivnosti");
        });
        it('[FiltrirajProslo/Raspored1] Test 1 - filter po Ponedjeljku, rezultat su sve aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored1);
            let stariBrojAktivnosti = prebrojiAktivnosti(raspored1);
            FiltrirajRaspored.filtrirajProslo("Ponedjeljak");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored1);
            assert.equal(stariBrojAktivnosti, noviBrojAktivnosti, "Trebale bi biti prisutne sve aktivnosti");
        });

        it('[FiltrirajProslo/Raspored2] Test 2 - filter po Srijedi, rezultat je 5 aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored2);
            FiltrirajRaspored.filtrirajProslo("Srijeda");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored2);
            assert.equal(5, noviBrojAktivnosti, "Trebalo bi biti prisutno osam aktivnosti");
        });
        it('[FiltrirajProslo/Raspored3] Test 3 - filter po Petku, rezultat je 1 aktivnost' , function() {
            FiltrirajRaspored.postaviRaspored(raspored3);
            FiltrirajRaspored.filtrirajProslo("Petak");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored3);
            assert.equal(1, noviBrojAktivnosti, "Trebala bi biti pristutna jedna aktivnost");
        });

        it('[FiltrirajBuduce/Raspored1] Test 1 - filter po Ponedjeljku, rezultat su tri aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored1);
            FiltrirajRaspored.filtrirajBuduce("Ponedjeljak");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored1);
            assert.equal(3, noviBrojAktivnosti, "Trebale bi biti prisutne tri aktivnosti");
        });

        it('[FiltrirajBuduce/Raspored2] Test 2 - filter po Srijedi, rezultat je 7 aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored2);
            FiltrirajRaspored.filtrirajBuduce("Srijeda");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored2);
            assert.equal(7, noviBrojAktivnosti, "Trebalo bi biti prisutno sedam aktivnosti");
        });
        it('[FiltrirajBuduce/Raspored3] Test 3 - filter po Petku, rezultat su sve aktivnosti' , function() {
            FiltrirajRaspored.postaviRaspored(raspored3);
            let stariBrojAktivnosti = prebrojiAktivnosti(raspored3);
            FiltrirajRaspored.filtrirajBuduce("Petak");
            let noviBrojAktivnosti = prebrojiAktivnosti(raspored3);
            assert.equal(stariBrojAktivnosti, noviBrojAktivnosti, "Trebale bi biti prisutne sve aktivnosti");
        });
    });

});