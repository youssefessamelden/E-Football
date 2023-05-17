const menu = document.querySelector('#btn')

const li = document.querySelector('.menue')

menu.addEventListener('click' , (e) => {
    e.preventDefault();
    if(li.style.display=="block"){
        li.style.display = "none";
    }
    
    else{
        li.style.display='block';
    }
})

/////////////////////////////////////////////
const ullist = document.querySelector('#ul-list')

// let list1 = document.querySelector('.click') 

li.addEventListener('click' , (e) => {
    // console.log(e.target.className)
    if (e.target.className === 'click') {
        // e.target.parentElement.style.display = 'none'  
        li.style.display = "none";
    }
})

//////////////////////////////////////////////////////////////////////////////////
const pes = document.querySelector('#ps')

const goals = document.querySelector('#goals')

pes.addEventListener('click' , (e) => {
    console.log(e.target)
    e.preventDefault();
    
    console.log(goals.style.display)
    if(goals.style.display=="block"){
        goals.style.display = "none";
    }
    
    else{
        goals.style.display='block';
    }
}
    )
///////////////////////////////////////////////////////////////////////////
const theme = document.querySelector('#theme')

const mode = document.querySelector('#mode')

const body = document.querySelector('body')




//dark mode
theme.addEventListener('click' , function(e){
    e.preventDefault()
    localStorage.setItem('backgroundcolor' , '#222');
    body.style.background = localStorage.getItem('backgroundcolor');

    localStorage.setItem('color' , 'floralwhite');
    document.querySelector('.p1').style.color = localStorage.getItem('color');
    localStorage.setItem('color' , 'floralwhite');
    document.querySelector('.p2').style.color = localStorage.getItem('color');
})


//white mode
mode.addEventListener('click' , function(e){
    e.preventDefault()
    localStorage.setItem('backgroundcolor' , 'silver'); 
    body.style.background = localStorage.getItem('backgroundcolor');

    localStorage.setItem('color' , '#222');
    document.querySelector('.p1').style.color = localStorage.getItem('color');
    document.querySelector('.p2').style.color = localStorage.getItem('color');

})

body.style.background = localStorage.getItem('backgroundcolor');
document.querySelector('.p1').style.color = localStorage.getItem('color');
document.querySelector('.p2').style.color = localStorage.getItem('color');

////////////////////////////////////////////////////////////////////////////////
//scrollBehavior: 

let btn = window.document.querySelector('.scroll');

window.addEventListener('scroll' , (e)=>{
    

    if(window.scrollY >=1000){

        btn.style.display = "block";
    }else{
        btn.style.display = "none";

    }
})

btn.addEventListener('click' , (e)=>{
    window.scroll({
        top:0 , 
        left:0 , 
        behavior:"smooth"
    });
})
