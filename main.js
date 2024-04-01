//    1 masala

// let son1 = +prompt("Birinchi sonni kiriting? ")
// let son2 = +prompt("Ikkinchi sonni kiriting? ")

// function myFunction(son1, son2){
//   if (son1 === son2){
//     alert("Ikkalasi bir biriga teng ", son1, son2)
//   }else if (son2 > son1){
//     alert('Eng kichik son '+ son1)
//   }else{
//     alert('Eng kichik son '+ son2)
//   }
// }

// myFunction(son1, son2)

//    2 masala
// function min(a,b,d){
//     let c;
//     c = Math.min(a,b,d)
//     alert("3 ta sondan eng kichigi " + c)
// }

// let birinchi = Number(prompt("1 sonni kiriting"));
// let ikkinchi = Number(prompt("2 sonni kiriting"));
// let uchinchi = Number(prompt("3 sonni kiriting"));

// min(birinchi,ikkinchi,uchinchi);

//    3 masala
// function lenghtArray(param1){
//     let l;
//     l = param1.length;
//     alert(l);
// }

// lenghtArray(["Ali", "Vali", "Qozi"]);

//  4 masala
// function qoshish(){
//     const array = [];
//     let p = prompt("Birinchi element kiriting");
//     let p2 = prompt("Ikkinchi element kiriting");
//     let p3 = prompt("Uchinchi element kiriting");
//     let r = array.push(p,p2,p3)
//     console.log(array);
// }
// qoshish();







                                       // UY ISHI
// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let sport = 5;
// let sport2 = 4;
// console.log(sport+sport2);



// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = +'12';
// console.log(a);



// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// if (randomNumber % 2 === 0) {
//     alert(randomNumber + " soni juft");
// } else {
//     alert(randomNumber + " soni toq");
// }


// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// let word = prompt("");

// if (word === "Mars") {
//     alert(word)
// } else {
//     alert("Mars It school")
// }


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring




// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "juft";
//     } else {
//         return "toq";
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i + " " + checkEvenOrOdd(i));
// }
