'use strict';



// document.querySelector('button').addEventListener('click',() => {
// const item2 = document.createElement('li');
// item2.textContent = 'item2';
// // ここまでで、item2というテキストが入っている、'li'タグを作成した。
// const ul = document.querySelector('ul')
// ul.appendChild(item2)
// })

// document.querySelector('button').addEventListener('click',() => {
//   const item0 = document.querySelectorAll('li')[0]  // 'li'タグ内の、一つ目の要素を取得。
//   const copy = item0.cloneNode(true)  //item0のコピーを作成
//   const ul = document.querySelector('ul');
//   const item1 = document.querySelectorAll('li')[1];
//   ul.insertBefore(copy,item1);

  // })
// document.querySelector('button').addEventListener('click',() => {
// const text0 = document.querySelectorAll('li')[0];
// const ul = document.querySelector('ul')
// ul.removeChild(text0)
// // text0.remove()

//   })

// input要素の処理方法。

// document.querySelector('button').addEventListener('click',() => {
// const li = document.createElement('li');                //「li」というエレメントを作成。
// const text =document.querySelector('input');            //inputを、text（定数）に定義
// const user = document.querySelector('select')
// li.textContent = `${user.value}は、${text.value}と、${user.selectedIndex}と、言ってます`;// liの中身を、text.valueで代入。 　input要素.valueで、入力されているものを表す。
// document.querySelector('ul').appendChild(li)              //liを、ulの中にこ要素として代入。
// text.value = '';                                      //処理終了後、入力欄を空白に。
// text.focus();                                         //text部の、カーソルを持っていく処理。
// })

// document.querySelector('button').addEventListener('click',() {
//     const colors = document.querySelectorAll('input');
//     let selectedColor;

//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColor = color.value;
//       }
//     });
//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   })


  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');      //inputタグを、配列で取得。
  //   let selectedColors = [];

  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColors.push(color.value);
  //     }
  //   });

  //   const li = document.createElement('li');
  //   li.textContent = selectedColors.join('  ');
  //   document.querySelector('ul').appendChild(li);
  // });


  // document.querySelector('button').addEventListener('mousemove',() => {
  //   console.log("ok!")
  // })
  // document.addEventListener('mousemove',e => {
  //   console.log(e.clientX,e.clientY)
  // })
  // document.addEventListener('keydown',(key) => {
  //   console.log(key.key);
  // const textarea = document.querySelector('textarea')

  // textarea.addEventListener('focus',() => {
  //   console.log("focus");
  // })

  // textarea.addEventListener('blur',() => {
  // console.log("blur");
// // })
//   textarea.addEventListener('input',() => {
//   console.log(textarea.value.length);
// })
//   textarea.addEventListener('change',() => {
//   console.log('oa');
// })

// document.querySelector('form').addEventListener('submit',(e) => {
//   e.preventDefault()
//   console.log('submit!!');
// })

{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}
