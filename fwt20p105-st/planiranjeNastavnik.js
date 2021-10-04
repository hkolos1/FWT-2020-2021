const nazivPolje = document.getElementById("naziv");
const pocetakPolje = document.getElementById("pocetak");
const krajPolje = document.getElementById("kraj");

nazivPolje.addEventListener('focusout', () => {
    validirajIme(nazivPolje);
});

pocetakPolje.addEventListener('focusout', () => {
    validirajPocetak(pocetakPolje);
    if(krajPolje.value)
        validirajKraj(krajPolje);
});

krajPolje.addEventListener('focusout', () => {
    validirajKraj(krajPolje);
});