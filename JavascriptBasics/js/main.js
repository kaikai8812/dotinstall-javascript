"use strict";

// console.log(parseInt('hello'));

// const score = 90
// const user = ''
// score >= 50 ? console.log('great') : console.log('OK!!')

// if (score >= 80 ){
//   console.log('good')
// } else if (score >= 60 ){
//     console.log('nice')
// } else {
//   console.log('not...')
// }

// switch文に書き換え。

// switch (user){
//   case 'kai' :
//     console.log('you are kai');
//     break;
//   case 'yui':
//   case 'yuki':
//     console.log('you are yui or yuki!!');
//     break;
//   default:
//     console.log('誰？？');
//     break;
// }


// for文、練習

// for ( let i = 1; i <= 10; i++) {   //iが１から１０になるまで、処理を１０回繰り返すということ。letを用いることにより、iが変化しるのをokしている。
//   console.log(`hello ${i}`)
// }

// while文　練習

// let hp = 83

// while (hp > 0){
//   console.log(`HPは残り${hp}です！`);
//   hp -= 10;
//   if (hp <= 0){
//     console.log(`HPは${hp}になりました！`)
//   }
// }
// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }


// break,continue,使い方。

// for (let i = 1; i <= 10; i++) {
//   if (i === 8 ){
//     continue;
//   }
//   console.log(i);
// }

// 関数の使い方。

// function showAdd(like = "お餅"){
// console.log('-----')
// console.log(`好きなものは、${like}です。`)
// console.log('-----')
// }

// console.log("好きなもの")
// showAdd('焼肉');
// console.log("嫌い")
// showAdd();
// console.log("好きなもの")

// 関数内でのreturnの使い方。

// const sum = function(a,b,c){
//   return a*b*c  //かけ算の結果を、返す
// }

// const total = sum(2,1,3) + sum(23,2,4)
// console.log(total)

// アロー関数の使い方。

// const sum = function(a,b,c){
//   return a*b*c  //かけ算の結果を、返す
// }

// const total = sum(2,1,3) + sum(23,2,4)
// console.log(total)

// これを書き換えると、

const sum = (a,b,c) => a*b*c;

console.log(sum(3,2,1))

const like = a => console.log(`${a}が好きです`)

like('肉')
