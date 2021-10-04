 var loptica;
    var da= 4;
    var db=4;
    var b=150;
    var a=10;
        function draw(){
        loptica= kvadrat.getContext('2d');
            loptica.clearRect(0,0,300,300);
                    loptica.beginPath();
                    loptica.fillStyle="#44ff00";
                loptica.arc(a,b,20,0,Math.PI*2,true);
            loptica.closePath();
        loptica.fill();
            if( a<0 || a>300)
                da=-da;
            if( b<0 || b>300)
                db=-db;
                a+=da;
                b+=db;
        }
        setInterval(draw,1);