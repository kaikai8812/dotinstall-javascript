'use strict';

{

//   const btn = document.getElementById('btn');

// btn.addEventListener('click',() => {
//   const n =Math.floor(Math.random() * 3)
//   // btn.textContent = n;

//   switch(n){
//     case 0:
//       btn.textContent = "大吉"
//       break;
//     case 1:
//       btn.textContent = "小吉"
//       break;
//     case 2:
//       btn.textContent = "キョウ"
//       break;
//   }
// });

}
// 上記の式を、下記に組み替える。

// {

//   const btn = document.getElementById('btn');

// btn.addEventListener('click',() => {
//   const results = ["大吉","末吉","子吉","青","そら"];
//   // const n =Math.floor(Math.random() * results.length);
//   btn.textContent =results[Math.floor(Math.random() * results.length)]


// });

// }

// 確率で出るやつを異なるようにした場合。


{

  const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  // const results = ["大吉","末吉","子吉","青","そら"];
  // // const n =Math.floor(Math.random() * results.length);
  // btn.textContent =results[Math.floor(Math.random() * results.length)]
const n =Math.random()*100;
if (n <5){
 btn.textContent = "大吉";
}else if(n < 20){
  btn.textContent = "中吉";
}else{
  btn.textContent ="ハズレ";
}

});

}
