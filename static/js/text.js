$("#btn").click(function(){
    $(".menue").toggle()
})

$("#ps").click(function(){
    $("#goals").toggle();
});

$('#goals li').click(function(){
    $('#goals').hide();
})

$('.menue li a').click(function(){
    $('.menue').hide();
})
////////////////////////////////////////////////////////////////
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
///////////////custmize////////////////////////
$('.custmozebutton').click( function () {
    $('.custmozebutton').toggleClass('visable');
    $('.custmize').toggleClass("switch");
})
///////////////////default//////////////////
$('.custmize .customize-pa .default-color').click(function(){
    $('h1').css('color' , 'blue')
    $('h2').css('color' , 'burlywood')
    $('h3 ,h4').css('color' , 'red')
    $('.p1 , .p2').css('color' , 'floralwhite')
})

$('.custmize .customize-pa .defult').click(function(){
    $('h1').css('color' , 'blue')
    $('h2').css('color' , 'burlywood')
    $('h3 ,h4').css('color' , 'red')
    $('.p1 , .p2').css('color' , 'floralwhite')
})
///////////////////box1////////////////////////
let lis =$('.box1 .color');
lis.eq(0).css('backgroundColor' , 'rgb(142, 67, 240)');
lis.eq(1).css('backgroundColor' , 'rgb(99, 0, 226)');
lis.eq(2).css('backgroundColor' , 'rgb(21, 14, 31)');
lis.eq(3).css('backgroundColor' , 'rgb(88, 77, 102)');
lis.eq(4).css('backgroundColor' , 'rgb(243, 241, 246)');

$('.box1 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h1').css('color' , maincolor);
})
//////////////////////box2/////////////////////////////
let lis2 =$('.box2 .color');
lis2.eq(0).css('backgroundColor' , 'rgb(239, 77, 72)');
lis2.eq(1).css('backgroundColor' , 'rgb(217, 7, 0)');
lis2.eq(2).css('backgroundColor' , 'rgb(250, 3, 107)');
lis2.eq(3).css('backgroundColor' , 'rgb(255, 122, 61)');
lis2.eq(4).css('backgroundColor' , 'rgb(255, 106, 151)');

$('.box2 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h1').css('color' , maincolor);
})
////////////////////////box3////////////////////////////////
let lis3 =$('.box3 .color');
lis3.eq(0).css('backgroundColor' , 'rgb(48, 199, 181)');
lis3.eq(1).css('backgroundColor' , 'rgb(6, 117, 46)');
lis3.eq(2).css('backgroundColor' , 'rgb(47, 193, 255)');
lis3.eq(3).css('backgroundColor' , 'rgb(8, 74, 243)');
lis3.eq(4).css('backgroundColor' , 'rgb(65, 117, 252)');

$('.box3 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h1').css('color' , maincolor);
})
//////////////////////box4////////////////
let lis4 =$('.box4 .color');
lis4.eq(0).css('backgroundColor' , 'rgb(142, 67, 240)');
lis4.eq(1).css('backgroundColor' , 'rgb(99, 0, 226)');
lis4.eq(2).css('backgroundColor' , 'rgb(21, 14, 31)');
lis4.eq(3).css('backgroundColor' , 'rgb(88, 77, 102)');
lis4.eq(4).css('backgroundColor' , 'rgb(243, 241, 246)');

$('.box4 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h2').css('color' , maincolor);
})
//////////////////////box5/////////////////////////////
let lis5 =$('.box5 .color');
lis5.eq(0).css('backgroundColor' , 'rgb(239, 77, 72)');
lis5.eq(1).css('backgroundColor' , 'rgb(217, 7, 0)');
lis5.eq(2).css('backgroundColor' , 'rgb(250, 3, 107)');
lis5.eq(3).css('backgroundColor' , 'rgb(255, 122, 61)');
lis5.eq(4).css('backgroundColor' , 'rgb(255, 106, 151)');

$('.box5 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h2').css('color' , maincolor);
})
////////////////////////box6////////////////////////////////
let lis6 =$('.box6 .color');
lis6.eq(0).css('backgroundColor' , 'rgb(48, 199, 181)');
lis6.eq(1).css('backgroundColor' , 'rgb(6, 117, 46)');
lis6.eq(2).css('backgroundColor' , 'rgb(47, 193, 255)');
lis6.eq(3).css('backgroundColor' , 'rgb(8, 74, 243)');
lis6.eq(4).css('backgroundColor' , 'rgb(65, 117, 252)');

$('.box6 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h2').css('color' , maincolor);
})
////////////////////////////box7////////////////
let lis7 =$('.box7 .color');
lis7.eq(0).css('backgroundColor' , 'rgb(142, 67, 240)');
lis7.eq(1).css('backgroundColor' , 'rgb(99, 0, 226)');
lis7.eq(2).css('backgroundColor' , 'rgb(21, 14, 31)');
lis7.eq(3).css('backgroundColor' , 'rgb(88, 77, 102)');
lis7.eq(4).css('backgroundColor' , 'rgb(243, 241, 246)');

$('.box7 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h3 ,h4').css('color' , maincolor);
})
//////////////////////box8/////////////////////////////
let lis8 =$('.box8 .color');
lis8.eq(0).css('backgroundColor' , 'rgb(239, 77, 72)');
lis8.eq(1).css('backgroundColor' , 'rgb(217, 7, 0)');
lis8.eq(2).css('backgroundColor' , 'rgb(250, 3, 107)');
lis8.eq(3).css('backgroundColor' , 'rgb(255, 122, 61)');
lis8.eq(4).css('backgroundColor' , 'rgb(255, 106, 151)');

$('.box8 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h2 ,h3').css('color' , maincolor);
})
////////////////////////box9////////////////////////////////
let lis9 =$('.box9 .color');
lis9.eq(0).css('backgroundColor' , 'rgb(48, 199, 181)');
lis9.eq(1).css('backgroundColor' , 'rgb(6, 117, 46)');
lis9.eq(2).css('backgroundColor' , 'rgb(47, 193, 255)');
lis9.eq(3).css('backgroundColor' , 'rgb(8, 74, 243)');
lis9.eq(4).css('backgroundColor' , 'rgb(65, 117, 252)');

$('.box9 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('h2 ,h3').css('color' , maincolor);
})
/////////////////////////box10//////////////////
let lis10 =$('.box10 .color');
lis10.eq(0).css('backgroundColor' , 'rgb(142, 67, 240)');
lis10.eq(1).css('backgroundColor' , 'rgb(99, 0, 226)');
lis10.eq(2).css('backgroundColor' , 'rgb(21, 14, 31)');
lis10.eq(3).css('backgroundColor' , 'rgb(88, 77, 102)');
lis10.eq(4).css('backgroundColor' , 'rgb(243, 241, 246)');

$('.box10 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('.p1 , .p2').css('color' , maincolor);
})
//////////////////////box11/////////////////////////////
let lis11 =$('.box11 .color');
lis11.eq(0).css('backgroundColor' , 'rgb(239, 77, 72)');
lis11.eq(1).css('backgroundColor' , 'rgb(217, 7, 0)');
lis11.eq(2).css('backgroundColor' , 'rgb(250, 3, 107)');
lis11.eq(3).css('backgroundColor' , 'rgb(255, 122, 61)');
lis11.eq(4).css('backgroundColor' , 'rgb(255, 106, 151)');

$('.box11 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('.p1 , .p2').css('color' , maincolor);
})
////////////////////////box12////////////////////////////////
let lis12 =$('.box12 .color');
lis12.eq(0).css('backgroundColor' , 'rgb(48, 199, 181)');
lis12.eq(1).css('backgroundColor' , 'rgb(6, 117, 46)');
lis12.eq(2).css('backgroundColor' , 'rgb(47, 193, 255)');
lis12.eq(3).css('backgroundColor' , 'rgb(8, 74, 243)');
lis12.eq(4).css('backgroundColor' , 'rgb(65, 117, 252)');

$('.box12 .color').click(function(){
    let maincolor = $(this).css('backgroundColor');
    $('.p1 , .p2').css('color' , maincolor);
})

/////////////////////////END OF BOXS////////////
let popp = document.querySelector(".popp")

let font1 = document.querySelector(".font1")

let font2 = document.querySelector(".font2")

let sp = document.querySelector(".sp")

popp.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "poppins" ;
})

font1.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "sigmar" ;
})

font2.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "lora" ;
})
/////////////////////////////////////////////////