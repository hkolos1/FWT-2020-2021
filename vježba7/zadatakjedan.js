var up = document.getElementById('PROZOR'); 

    var str2 = '<p>&quotJa&nbspsam&nbspmali&nbspčovjek&nbspkoji&nbspje&nbspzaboravio&nbspda&nbspje&nbspmali.&nbspUvrijedio&nbspsam&nbspih&nbspšto&nbspse&nbspusuđujem&nbspda&nbspmislim.&quotMeša&nbspSelimović</p>”'; 
    var str1 = "<p>Ja sam mali čovjek koji je zaboravio da je mali. Uvrijedio sam ih što se usuđujem da mislim.Meša Selimović</p>";  
            up.innerHTML =  str1; 
    var down = document.getElementById('REZULTAT'); 

        function K_Fun() { 
    var regex = /( |<([^>]+)>)/ig; 
        down.innerHTML = str2.replace(regex, ""); 
} 
