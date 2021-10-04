function trenutno(divRaspored, trenutnoVrijeme){
    const datum = new Date(trenutnoVrijeme);
    const tabela = divRaspored.getElementsByTagName("table")[0];
    const tbody = tabela.children[0];
    const redovi = tbody.children;
    for(let i = 0; i < redovi.length; i++){
        const celije = redovi[i].children;
        let brojacVremena = 7.5;
        for(let j = 0; j < celije.length; j++ ){
            const celija = celije[j];
                    celija.style.backgroundColor = "#4caf50";
                    celija.style.border = "3px solid black";
                let colspan = 1;
                if(celija.getAttribute("colspan")) colspan = parseInt(celija.getAttribute("colspan"));
                brojacVremena += 0.5 * colspan;
        }
    }
}
