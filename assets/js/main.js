

function showtxt(){
 const myList=document.getElementById("mylist");
 const myListCode=myList.value; 
 const textPlace=document.getElementById("masse")
 console.log(typeof(myListCode));

    switch (myListCode) {
        case "0":
         textPlace.innerHTML=`<b>Brief und Postkarte</b><br>
         L: 10 - 23,5 cm<br>
         B: 7 - 12,5 cm<br>
         H: bis 1 cm`
        break;
        case "1":
        textPlace.innerHTML=`<b>DHL Paket 2 kg</b><br>
        DHL Paket 2 kg<br>`
        break;
        case "2":
        textPlace.innerHTML=`<b>DHL Paket 5 kg</b><br>
        bis 120 x 60 x 60 cm<br>`
        break;
        case "3":
        textPlace.innerHTML=`<b>DHL Paket 10 kg</b><br>
        bis 120 x 60 x 60 cm<br>`
        break;
            
        default:
        textPlace.innerText="error";
        break;

}

    


   
 
}
