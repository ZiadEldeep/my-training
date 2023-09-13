// var xl ="in"
// var desc="nbbnbnbn"
// var nn="2323"
// document.querySelector("h3").style.color="red";
// document.write(`<h2>hii ${xl} </h2> ` )
// document.write(desc)
// document.write(`<br>${nn}`)
// document.querySelector("h3").style.color="red";
// document.write(`<h2>hii ${xl} </h2> ` )
// document.write(desc)
// document.write(`<br>${nn}`)
// document.querySelector("h3").style.color="red";
// document.write(`<h2>hii ${xl} </h2> ` )
// document.write(desc)
// document.write(`<br>${nn}`)
function my(){
    var x;
    for(x=0;x<10;x++)
document.write(x+"<br>")
}
// console.log('done');
// setTimeout(()=>{console.log('done2');},3000)
// console.log('30000');
// console.log('done');
// setTimeout(()=>{console.log('done2');},3000)
// console.log('30000');console.log('done');
// setTimeout(()=>{console.log('done2');},3000)
// console.log('30000');console.log('done');
// setTimeout(()=>{console.log('done2');},3000)
// console.log('30000');
// console.log('dooooooooooooooone');

// function getPasta(){
//     return new Promise(function (x) {
//        setTimeout(()=>{
//         document.write('done1'+'<br>');
//         x()
// },500) 
//     })  
// }   
// function getPizza(){
//     return new Promise(function (y){
//         setTimeout(()=>{
//             document.write('done2'+'<br>');
//             y()
//         },1000)
//     })    
// }
// function getSaalad(){
//     return new Promise((x) => {
//         setTimeout(()=>{
//             document.write('done4'+'<br>');
//         x()
//     },2000)
//     })
    
// }
// function getSalad(){
//     return new Promise((x) =>{
//         setTimeout(()=>{
//         document.write('done3'+'<br>');
//         x()
//     },2000)
//     })
    
// }
// function gg(){
//     return new Promise ((x) =>{
//         setTimeout(()=>{
//             document.write('done13'+'<br>')
//             x() 
//         },2000)
// })
// } 

// getPasta().then(function(){
//     getPizza().then(function(){
//         getSalad().then(function(){
//             getSaalad().then(function(){
//                 gg()
//             })
//         })
//     })
// })

// getPasta(function(){ getPizza(function (){getSalad()
// })})

// async function zira(){
//   await getPasta()
//   await getPizza()
//   await getSalad()
//   await getSaalad()
//   await gg()
// }

// zira()

// function myyes(){
//     setTimeout(()=>{
//         console.log('Yes')
//     },2000)
// }

// function myno(){
//     setTimeout(()=>{
//         console.log('Noo')
//     },2000)
// }

// myyes()
// myno()

function newfun(){
    return new Promise ((res , errror) =>{
        setTimeout(()=>{
          if(true){
            // console.log('this is true');
            res()
        }
        else{
            errror()
        }  
        },2000)
        
    })
}

function oldOne (){
    return new Promise((x)=>{
        setTimeout(()=>{
            console.log('this is Old one');
            x()
        },200)
    })
}
 newfun().then(function(){
    oldOne();
    console.log('hello');
 }).catch(function(){
    console.log('zira is coming back');
 })

// async function demo(){
//      await newfun();
//      await oldOne();
// }
// demo();




