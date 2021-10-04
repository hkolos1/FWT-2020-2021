function validirajIme(ieNaziv){
    const naziv = ieNaziv.value;
    let validno = true;
    if(naziv.length > 5) validno = false;
    let brojacSlova = 0;
    for(let i = 0; i < naziv.length; i++){
        if(i === 0 && !(naziv[i] >= 'A' && naziv[i] <= 'Z')) validno = false;
        if( naziv[i] >= 'A' && naziv[i] <= 'Z' || naziv[i] >= 'a' && naziv[i] <= 'z' )
            brojacSlova++;
        if( naziv[i] >= '0' && naziv[i] <= '9' && i < naziv.length - 1) validno = false;
    }
    if(brojacSlova < 2) validno = false;
    ieNaziv.classList.remove("validno-polje");
    ieNaziv.classList.remove("nevalidno-polje");
    if(validno) ieNaziv.classList.add("validno-polje");
    else ieNaziv.classList.add("nevalidno-polje");
}

function validirajPocetak(iePocetak){
    const pocetak = iePocetak.value;
    let validno = pocetak.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
    if(validno){
        const podjela = pocetak.split(":");
        if(parseInt(podjela[0]) > 20 ||( parseInt(podjela[0]) === 20 && parseInt(podjela[1]) > 0)) validno = false;
    }
    iePocetak.classList.remove("validno-polje");
    iePocetak.classList.remove("nevalidno-polje");
    if(validno) iePocetak.classList.add("validno-polje");
    else iePocetak.classList.add("nevalidno-polje");
}

function validirajKraj(ieKraj){
    const tip = document.getElementById("tip").value;
    const kraj = ieKraj.value;
    const pocetak = document.getElementById("pocetak").value;
    let pocetakValidan = pocetak.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
    if(pocetakValidan){
        const podjela = pocetak.split(":");
        if(parseInt(podjela[0]) >= 20 && parseInt(podjela[1]) > 0) pocetakValidan = false;
    }
    let validno = kraj.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
    if(pocetakValidan && validno){
        const podjelaPocetak = document.getElementById("pocetak").value.split(":");
        const podjelaKraj = kraj.split(":");
        const pocetakSat = podjelaPocetak[0];
        const pocetakMinute = parseInt(podjelaPocetak[1]) + 60 * parseInt(pocetakSat);
        const krajSat = podjelaKraj[0];
        const krajMinute = parseInt(podjelaKraj[1]) + 60 * parseInt(krajSat);
        const razlika = krajMinute - pocetakMinute;
        validno = pocetakMinute < krajMinute &&
            (( tip === 'Predavanje' &&  razlika >= 60 && razlika <= 180)||(tip === 'Vježbe' && razlika >= 45 && razlika <= 180));
    }
    ieKraj.classList.remove("validno-polje");
    ieKraj.classList.remove("nevalidno-polje");
    if(validno) ieKraj.classList.add("validno-polje");
    else ieKraj.classList.add("nevalidno-polje");
}