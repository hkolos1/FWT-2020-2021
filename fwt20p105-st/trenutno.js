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
            if(celija.className === 'color'){
                const start = brojacVremena;
                const end = start + 0.5 * parseInt(celija.getAttribute("colspan"));
                const trenutnoVrijeme = datum.getHours() + datum.getMinutes() * (5 / 300);
                if( trenutnoVrijeme >= start && trenutnoVrijeme < end && datum.getDay() === i ){
                    celija.style.backgroundColor = "#4caf50";
                    celija.style.border = "3px solid black";
                }
                brojacVremena += 0.5 * parseInt(celija.getAttribute("colspan"));
            }
            else brojacVremena += 0.5;
        }
    }
}
