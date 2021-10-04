let assert = chai.assert;
const raspored = document.getElementById("raspored");
function napuni(){
    raspored.innerHTML ="    <header>\n" +
        "        <nav>\n" +
        "            <ul class=\"nav__links\">\n" +
        "                <li><a href=\"posjecenost.html\">Posjećenost</a></li>\n" +
        "                <li><a href=\"sp4_z2/raspored.html\">Raspored</a></li>\n" +
        "                <li><a href=\"planiranjeNastavnik.html\">Planiranje Nastavnik</a></li>\n" +
        "                <li><a href=\"podaciStudent.html\">Podaci Student</a></li>\n" +
        "                <li><a href=\"obavijesti.html\">Obavijesti</a></li>\n" +
        "            </ul>\n" +
        "        </nav>\n" +
        "    </header>\n" +
        "    <p class=\"jutro\" >08:00 10:00 12:00</p>\n" +
        "    <p class=\"popodne\" >15:00 17:00 19:00</p>\n" +
        "    <table style=\"width: 50%; table-layout: fixed;\">\n" +
        "        <tr>\n" +
        "            <td><strong>Ponedjeljak</strong></td>\n" +
        "            <td></td> <td></td>\n" +
        "            <td class=\"color\" colspan=\"6\">WT<br> Predavanje</td>\n" +
        "            <td class=\"color\" colspan=\"3\">WT<br> vježbe</td><td></td>\n" +
        "            <td class=\"color\" colspan=\"6\">RMA<br> predavanje</td>\n" +
        "            <td></td> <td></td> <td></td> <td></td>\n" +
        "            <td></td> <td></td> <td></td> <td></td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>Utorak</td>\n" +
        "            <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>\n" +
        "            <td class=\"color\" colspan=\"3\">RMA<br> vježbe</td>\n" +
        "            <td class=\"color\" colspan=\"4\">DM<br> tutorijal</td>\n" +
        "            <td class=\"color\" colspan=\"6\">DM<br> predavanje</td>\n" +
        "            <td></td> <td></td> <td></td> <td></td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>Srijeda</td>\n" +
        "            <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>\n" +
        "            <td class=\"color\" colspan=\"6\">OI<br> Predavanje</td>\n" +
        "            <td colspan=\"6\"> </td>\n" +
        "            <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>Četvrtak</td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td>Petak</td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "            <td></td><td></td><td></td><td></td><td></td><td></td>\n" +
        "        </tr>\n" +
        "    </table>";
}
describe('Testovi', function() {

    beforeEach(function (){
        napuni();
    });

    afterEach(function(){
        raspored.innerHTML = "";
    });


    describe('Testiranje rasporeda', function() {
        it('Obojene sve aktivnosti za ponedjeljak' , function() {
            trenutno(raspored, "2020-01-05T16:47");
            trenutno(raspored, "2020-01-05T11:47");
            trenutno(raspored, "2020-01-05T12:47");

            const tabela = raspored.getElementsByTagName("table")[0];
            const tbody = tabela.children[0];
            const redovi = tbody.children;
            let brojAktivnosti = 0;
            for(let i = 0; i < redovi.length; i++){
                const celije = redovi[i].children;
                for(let j = 0; j < celije.length; j++){
                    const celija = celije[j];
                    if(celija.style.backgroundColor === "rgb(76, 175, 80)" && i === 0)
                        brojAktivnosti++;
                }
            }
            assert.equal(brojAktivnosti, 3, 'Broj aktivnosti treba biti 3 i to u ponedjeljak');
        });

        it('Obojena jedna aktivnost (Utorak)' , function() {
            trenutno(raspored, "2020-01-06T16:47");
            const tabela = raspored.getElementsByTagName("table")[0];
            const tbody = tabela.children[0];
            const redovi = tbody.children;
            let brojAktivnosti = 0;
            for(let i = 0; i < redovi.length; i++){
                const celije = redovi[i].children;
                for(let j = 0; j < celije.length; j++){
                    const celija = celije[j];
                    if(celija.style.backgroundColor === "rgb(76, 175, 80)" && i === 1)
                        brojAktivnosti++;
                }
            }
            assert.equal(brojAktivnosti, 1, 'Broj aktivnosti treba biti 1 i to u utorak');
        });

        it('Obojena jedna aktivnost (Ponedjeljak)' , function() {
            trenutno(raspored, "2020-01-05T16:47");
            const tabela = raspored.getElementsByTagName("table")[0];
            const tbody = tabela.children[0];
            const redovi = tbody.children;
            let brojAktivnosti = 0;
            for(let i = 0; i < redovi.length; i++){
                const celije = redovi[i].children;
                for(let j = 0; j < celije.length; j++){
                    const celija = celije[j];
                    if(celija.style.backgroundColor === "rgb(76, 175, 80)" && i === 0)
                        brojAktivnosti++;
                }
            }
            assert.equal(brojAktivnosti, 1, 'Broj aktivnosti treba biti 1 i to u ponedjeljak');
        });

        it('Nije obojena aktivnost' , function() {
            trenutno(raspored, "2020-01-08T16:47");
            const tabela = raspored.getElementsByTagName("table")[0];
            const tbody = tabela.children[0];
            const redovi = tbody.children;
            let brojAktivnosti = 0;
            for(let i = 0; i < redovi.length; i++){
                const celije = redovi[i].children;
                for(let j = 0; j < celije.length; j++){
                    const celija = celije[j];
                    if(celija.style.backgroundColor === "rgb(76, 175, 80)")
                        brojAktivnosti++;
                }
            }
            assert.equal(brojAktivnosti, 0, 'Broj aktivnosti treba biti 0');
        });

        it('Obojene dvije aktivnosti' , function() {
            trenutno(raspored, "2020-01-06T16:47");
            trenutno(raspored, "2020-01-05T16:47");
            const tabela = raspored.getElementsByTagName("table")[0];
            const tbody = tabela.children[0];
            const redovi = tbody.children;
            let brojAktivnosti = 0;
            for(let i = 0; i < redovi.length; i++){
                const celije = redovi[i].children;
                for(let j = 0; j < celije.length; j++){
                    const celija = celije[j];
                    if(celija.style.backgroundColor === "rgb(76, 175, 80)")
                        brojAktivnosti++;
                }
            }
            assert.equal(brojAktivnosti, 2, 'Broj aktivnosti treba biti 2');
        });
    });

});