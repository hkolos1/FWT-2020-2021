var answer = prompt("Unesite tekst: ");

const obrnuto = answer.split('') 
                        .reverse('') 
                        .join('');

      if(obrnuto!=null && obrnuto!=""){
            alert(obrnuto);
      }