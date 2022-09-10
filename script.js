
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
    // if (e.target.innerText === 'Пункт 4') {
    //     content[0].innerText   = 'Анна Каренина'  
    // }
    // if (e.target.innerText === 'Пункт 2') {
    //     content[0].innerText   = 'Война и мир'  
    // }
    

    switch(e.target.innerText){
        case 'Пункт 1':
            content[0].innerText   = 'Анна Каренина'    
            break;
        case 'Пункт 2':
            content[0].innerText   = 'Война и мир'   
            break;
        case 'Пункт 3':
            content[0].innerHTML   = '<img src=./img/hood.png>'
            break;
        case 'Пункт 4':   
        break;
        case 'Пункт 5':
        break;
        case 'Пункт 6':
        break;
        case 'Пункт 7':
        break;
        case 'Пункт 8':   
        break;
        case 'Пункт 9':   
        break;
        case 'Пункт 10':   
        break;
        case 'Пункт 11':   
        break;
        case 'Пункт 127':   
        break;
        default:
            content[0].innerText = 'Не нашёл';
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

