
window.addEventListener('load', function(){
    // 
    let ul = document.getElementById('menu');
    let arrayLi = document.getElementsByClassName('item-menu');

    let content = document.getElementsByClassName('content');
    // let arrayLi2 = document.getElementsByName('li');
    // console.log(ul);
    // console.log(arrayLi);
   
    
    Object.keys(arrayLi).forEach( key => {
        
    arrayLi[key].addEventListener('click', Concat)
    
    })


   function Concat(e){
    if (e.target.innerText === 'Пункт 4') {
        content[0].innerText   = 'Анна Каренина'  
    }
    if (e.target.innerText === 'Пункт 2') {
        content[0].innerText   = 'Война и мир'  
    }
    
   }

   console.log(content);
  
})



// let element = document.getElementById('app');

// function changeColor(colorText = 'red') {
// element.style.color = colorText;    
// element.innerHTML = "<h1>NEW TEXT </h1>";
// }


// menu.addEventListener('click', Concat );
// function Concat(lastName = 'Пупкин', firstName = 'Иван'){
//     let result = lastName + ' '+ firstName;
//     return result;
// }
// console.log()

