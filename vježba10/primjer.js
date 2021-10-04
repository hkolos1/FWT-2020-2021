
function Kvadrat(roditelj, x, y) {
    this.roditelj = roditelj;
    this.x = x;
    this.y = y;
 }
 Kvadrat.prototype.postavi = function () {
    this.element = document.createElement("div");
    this.element.classList.add("sivi");
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.roditelj.appendChild(this.element);
 }
 
 function PokretniKvadrat(roditelj, x, y) {
    Kvadrat.call(this, roditelj, x, y);
    this.dx = -10;
    this.dy = -10;
 }
 
 Object.setPrototypeOf(PokretniKvadrat.prototype, Kvadrat.prototype);
 
 PokretniKvadrat.prototype.postavi = function () {
    this.element = document.createElement("div");
    this.element.classList.add("zeleni");
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.roditelj.appendChild(this.element);
 }
 
 PokretniKvadrat.prototype.pomjeri = function () {
    if (this.x <= 0 || this.x + 10 >= parseInt(getComputedStyle(this.roditelj).width)) {
        this.dx = -this.dx;
    }
    if (this.y <= 0 || this.y + 10 >= parseInt(getComputedStyle(this.roditelj).height)) {
        this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
 }
 
 let listaKvadrata = [];
 function azurirajSvePokretne() {
    for (let i = 0; i < listaKvadrata.length; i++) {
        if (listaKvadrata[i] instanceof PokretniKvadrat) {
            listaKvadrata[i].pomjeri();
        }
    }
 }
 setInterval(azurirajSvePokretne, 100);
 
 function noviLijevi(event) {
    let pk = new PokretniKvadrat(document.getElementById("polje"), event.clientX, event.clientY);
    pk.postavi();
    listaKvadrata.push(pk);
    //Zeleni kvadrati brišu nakon 5 sekundi (ne znam napraviti za odbijanje).
    setTimeout(function nestaniZeleni(){$('.zeleni').remove();},5000)
 }
 
 function noviDesni(event) {
    let k = new Kvadrat(document.getElementById("polje"), event.clientX, event.clientY);
    k.postavi();
    listaKvadrata.push(k);
    event.preventDefault();
    //Sivi kvadrati nestaju nakon 5 sekundi.
    setTimeout(function nestaniSivi(){$('.sivi').remove();}, 5000)
    return false;
 }

 