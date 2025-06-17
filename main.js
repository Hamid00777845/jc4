alert("Sizga hozir random son chiqishni boshlaydi");

let random_son = Math.floor(Math.random() * 100);

alert("Sizdagi random son : " + random_son);

let con =confirm(
    "Random sonni 2 ga bo`lamiz va ko`paytiraniz hamda 3 ga bolib qoldig`ini koramiz"
);

if (con) {
    alert(`Random son: ${random_son}
     2 ga kopaytirsak:  ${random_son * 2} 
     2 ga bolsak:${random_son  / 2} 
      3 ga bolib qoldiqni olsak:  ${random_son % 3} 
         `);
}else{
    
}