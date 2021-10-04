let FiltrirajRaspored = (function(){

    let trenutniRaspored = null;
    let inicijalniRasporedInnerHTML = null;

    const obrisiAktivnost = (aktivnost) => {
        let brojac = 0;
        while(brojac !== aktivnost.colSpan){
            const td = document.createElement("td");
            aktivnost.parentNode.insertBefore(td, aktivnost.nextSibling);
            brojac++;
        }
        aktivnost.parentNode.removeChild(aktivnost);
    }

    const filtrirajPredmet = function(dioImenaPredmeta){
        trenutniRaspored.innerHTML = inicijalniRasporedInnerHTML;
        if(!dioImenaPredmeta || !trenutniRaspored) return;
        const tabela = trenutniRaspored.getElementsByTagName("table")[0];
        const tbody = tabela.children[0];
        const redovi = tbody.children;
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                const celija = red[j];
                if(celija.classList.contains("color")){
                    const predavanje = celija.innerHTML.split("<br>")[0];
                    if(!predavanje.includes(dioImenaPredmeta)){
                        obrisiAktivnost(celija);
                    }
                }
            }
        }
    }

    const filtrirajTip = function (nazivTipa){
        trenutniRaspored.innerHTML = inicijalniRasporedInnerHTML;
        if(!nazivTipa || !trenutniRaspored) return;
        const tabela = trenutniRaspored.getElementsByTagName("table")[0];
        const tbody = tabela.children[0];
        const redovi = tbody.children;
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                const celija = red[j];
                if(celija.classList.contains("color")){
                    const tip = celija.innerHTML.split("<br>")[1].replace(" ", "");
                    if(nazivTipa !== tip){
                        obrisiAktivnost(celija);
                    }
                }
            }
        }
    }

    const filtrirajTrajanje = function (brojMinuta){
        trenutniRaspored.innerHTML = inicijalniRasporedInnerHTML;
        if(!trenutniRaspored) return;
        const tabela = trenutniRaspored.getElementsByTagName("table")[0];
        const tbody = tabela.children[0];
        const redovi = tbody.children;
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                const celija = red[j];
                if(celija.classList.contains("color")){
                    const brojMinutaAktivnosti = celija.colSpan * 30;
                    if(brojMinutaAktivnosti > brojMinuta){
                        obrisiAktivnost(celija);
                    }
                }
            }
        }
    }

    const filtrirajProslo = function (nazivDana){
        trenutniRaspored.innerHTML = inicijalniRasporedInnerHTML;
        if(!nazivDana || !trenutniRaspored) return;
        const tabela = trenutniRaspored.getElementsByTagName("table")[0];
        const tbody = tabela.children[0];
        const redovi = tbody.children;
        // kreirati niz dana
        const dani = [];
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                if(j === 0) dani.push(red[j].innerHTML.replace("<strong>", "").replace("</strong>", ""));
            }
        }
        if(!dani.includes(nazivDana)) return;
        const indexDana = dani.indexOf(nazivDana);
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                const celija = red[j];
                if(celija.classList.contains("color")){
                    if(i < indexDana){
                        obrisiAktivnost(celija);
                    }
                }
            }
        }
    }

    const filtrirajBuduce = function (nazivDana){
        trenutniRaspored.innerHTML = inicijalniRasporedInnerHTML;
        if(!nazivDana || !trenutniRaspored) return;
        const tabela = trenutniRaspored.getElementsByTagName("table")[0];
        const tbody = tabela.children[0];
        const redovi = tbody.children;
        // kreirati niz dana
        const dani = [];
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                if(j === 0) dani.push(red[j].innerHTML.replace("<strong>", "").replace("</strong>", ""));
            }
        }
        if(!dani.includes(nazivDana)) return;
        const indexDana = dani.indexOf(nazivDana);
        for(let i = 0; i < redovi.length; i++){
            const red = redovi[i].children;
            for(let j = 0; j < red.length; j++){
                const celija = red[j];
                if(celija.classList.contains("color")){
                    if(i > indexDana){
                        obrisiAktivnost(celija);
                    }
                }
            }
        }
    }

    const postaviRaspored = function (raspored){
        trenutniRaspored = raspored;
        inicijalniRasporedInnerHTML = trenutniRaspored.innerHTML;
    }

    return {
        filtrirajPredmet,
        filtrirajTip,
        filtrirajTrajanje,
        filtrirajProslo,
        filtrirajBuduce,
        postaviRaspored
    }

})();