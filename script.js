//  let age = prompt("Enter our age");
//   if( age < 10){
//     alert("not think about driving");
//   } else if ( age < 18) {
//      alert(" Wait until 18 above");
    
//   } else {

//     alert("now you are eligible for driving");
    
//   }

//  console.log( age);
  
// 

// let main = document.getElementById('Box1');

// main.style.color = 'Green';
// main.style.borderBottom= '2px solid black ';

// let box2 = document.getElementsByClassName('Box2');

// box2[1].style.color = ' pink'

// // for(let i = 0; i < box2.length; i++ ){
    
// //   box2[i].style.backgroundColor = 'yellow' 

// let items = document.querySelector('.Box2:last-child ');

// items.style.color = 'blue'


// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i = 0; i < odd.length; i++){

//   odd[i].style.backgroundColor='yellow'  
// }

// let even = document.querySelectorAll('li:nth-child(even)')

// for (let i =0 ; i < even.length; i++){

//     even[i].style.backgroundColor ='lightgreen'
// }


// let p = document.querySelector('p')

// p.style.fontWeight = 'bold'


// let button = document.querySelector('button')

// button.style.backgroundColor ='blue'
// button.style.color = 'white'
// button.style.fontWeight = 'bold'
// button.style.borderRadius = '4px'






  
// ...................................................................

// project -- Bulb ( ON-OFF)


const bulb = document.querySelector('#bulb');

const btn = document.querySelector('#btn');

 btn.style.borderRadius = '5px';
 btn.style.fontWeight ='bold'


btn.addEventListener( 'click' , function(){


  if( bulb.src.match('off') ){

   
  bulb.src="https://www.w3schools.com/js/pic_bulbon.gif"

  btn.innerHTML = 'OFF';
  


 }else{

    bulb.src ="https://www.w3schools.com/js/pic_bulboff.gif"
    
    btn.innerHTML ='ON';
 }


});

// ..............................................












