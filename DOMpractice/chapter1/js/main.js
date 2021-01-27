'use strict';


// function update(){
//   document.querySelectorAll('p').forEach((p,index) => {
//     p.textContent = `${index+1}番目の要素です`;
//   });
// }

// document.querySelector('button').addEventListener('click',() => {
// const text =document.getElementById('target')

//     text.textContent = 'changed'
//     text.title = '変更後'
//     // text.className = ('my-color my-border')
//     // if (text.classList.contains('my-color') === true) {
//     //   text.classList.remove('my-color');
//     // }else{
//     //   text.classList.add('my-color');
//     // }
//     text.classList.toggle('my-color')
// })

// setTimeout(update,1000);

// カスタムデータ属性

document.querySelector('button').addEventListener('click',() => {
const greet = document.getElementById('greeting');
  greet.textContent = greet.dataset.translation;
})
