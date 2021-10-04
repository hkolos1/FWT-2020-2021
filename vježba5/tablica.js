var tablica='';
var red=10;
var kol=10;
var X='X'
          for(var i=0;i<=red;i++)
           {
              tablica+="<tr>" ;
                  for(var j=0;j<=kol;j++){
                        if(i==0 && j==0){
                            tablica+="<th>"+X+"</th>";
                                  continue;
                        }
          if(i>0 && j==0)
              tablica+="<th>"+i+"</th>";
                        if(i==0 && j>0)
                            tablica+="<th>"+j+"</th>";

                        else if(i!=0 && j!=0)
                            tablica+="<td>"+i*j+"</td>";
                        }
    tablica+= "</tr>";
    }
    document.write('<table border=1px>'+ tablica +'</table>');
