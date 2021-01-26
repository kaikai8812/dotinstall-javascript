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

// const sum = (a,b,c) => a*b*c;

// console.log(sum(3,2,1))

// const like = a => console.log(`${a}が好きです`)

// like('肉')

// 配列の作り方。
// const scores =  [10, 20, 30, 90 ];
// scores.push(100,89)
// scores.unshift(50)
// console.log(scores)

// scores.splice(2, 2, 50)
// console.log(scores)
// for (let i = 0; i<scores.length; i++){
//   console.log(`Score: ${scores[i]}`)
// }

// スプレッド構文

// const scores1 = [10,20,30];
// const scores2 = [40,50,60];

// scores2.push(...scores1)

// console.log(scores2)

// function sum(a,b,c){
// console.log(a+b+c)
// }

// sum(...scores1)

// const [score1,...score2] = scores1
// console.log(score1)
// console.log(score2)

// froEach文の書き方。

// const scores = [12, 90, 40, 70];

  // scores.forEach((scores,index) => {
  //   console.log(`${scores},${index}`)
  // });

  // map文の使い方。
  // const scores = [12, 90, 40, 70];

  // const NewScores = scores.map((score) =>{
  //   return score + 20
  // });

  // const NewScores = scores.map(score => score + 20);

  // console.log(NewScores)

  // filter()の使い方。

// const number = [2,3,4,5,6,7,8,]

// const SelectNumber = number.filter((number) => {
//   if (number % 2 ===0){
//     return true;
//   }
// })

// const SelectNumber = number.filter(number => number % 2 === 0)
// console.log(SelectNumber)

// オブジェクト　指定の仕方とか、練習。
// const point ={x: 100, y: 180};

// console.log(point.x)
// console.log(point['y'])
// console.log(point)
// point.z = 200
// point['a'] =280
// console.log(point)
// delete point.x
// console.log(point)

// オブジェクトに対する、スプレッド構文の練習

// const otherProps = {
//   r: 4,
//   color: 'red',
// };

// const point = {
//   x: 180,
//   y: 100,
//   ...otherProps
// }
// console.log(point)

// // 分割代入

// const {x,y,...others} = point
// console.log(x)
// console.log(y)
// console.log(others)
// console.log(point)
// console.log(otherProps)

// Object.keys関係

// const point = {
//   x: 180,
//   y: 100,}

// const keys = Object.keys(point)
// // この段階で、keysは配列として認識されている。[x,y]という文字列。なので、この後に${point[key]}として使えるのである。
// keys.forEach((key) => {
// console.log(`Key: ${key}, point: ${point[key]}`)
// })

// console.log(point['x'])
// console.log(point.x)

// const points = [
//   {a: 100, b: 120},
//   {a: 130, b: 140},
//   {a: 143, b: 124}
// ]

// const keys =Object.keys(points[1])
// console.log(keys)

// keys.forEach((key) => {
//   console.log(`key: ${key}, point ${points[1][key]}`)
// })

// 単数の場合と、配列の場合の処理の変化について、

// let x =[1,2];
// let y = x;
// x[0] = 10;
// console.log(y);
// // これだと、y　には、xのデータがある場所を代入したことになる。よって、後からxの値が変更された場合、yの値も変更されたことになる。
// let x =[1,2];
// let y = ...x;
// x[0] = 10;
// console.log(y);
// 上記のように、yにxを代入する際にxをスプレッド構文にしておくと、yに代入される値は、場所ではなく、配列の値そのものになるので、後からxの値が変更されても、yに影響を与えることがなくなる。

// 文字列の取得方法

// const str = 'aoyama';
// console.log(str.length);
// console.log(str.substring(1,3));

// 配列の要素　＜＝＞文字列の変換


//  const d = [2021, "トロピカル", 26];
// console.log(d.join('ジャニーズ'))

// const t =d.join('/')
// console.log(t)

// console.log(t.split('/'))

// const [year,month,day] = t.split('/')

// console.log(month)
// console.log(month.length)

// const scores = [10,243,36]

// let sum =0;
// scores.forEach(score =>{
//   // sum = sum + score;
//   sum += score
// })
// // forEachを使って、sumという変数にscoresの配列の中身を一つずつ足していっている処理。
// // console.log(sum)
// const avg = sum / scores.length
// // 配列に対してlengthを使うと、配列の要素の数を表す
// // console.log(avg)
// console.log(Math.floor(avg));
// console.log(Math.ceil(avg));
// console.log(Math.round(avg));
// console.log(avg.toFixed(4));

// console.log(
//   Math.floor(Math.random()*10)
  // )

// 1~6のランダムな数字の作成。
// console.log(Math.floor(Math.random() * 6) + 1

// 日時の取得方法


// console.log(`${d.getFullYear()}年,${d.getMonth() + 1}月${d.getDate()}日`)

// const d = new Date(2020,8);
// d.setHours(17,20,21)
// d.setDate(d.getDate() + 3)


// console.log(d)

// alert,confirmの使い方

// let answer = confirm("私のことが好きですか？？");

// if (answer){
//   alert("うれしい！！");
// } else {
//   answer = confirm("もう一回聞きます。好きですか？？")
//   if (answer){
//     alert("やっぱりそうよね！");
//   }else{
//     alert("さようなら")
//   }
// }

// Interval処理
// let i = 0

// function showTime() {
//   console.log(`${i+1}回目${new Date()}`)
//   i = i + 1
//   if (i > 2){
//     clearInterval(intervalID);
//   }
// }

// const intervalID = setInterval(showTime, 1000)

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);
// }

// Timeout処理

// let i = 0

// function showTime(){
//   console.log(new Date());
//   const TimeoutID = setTimeout(showTime,1000);
//   i ++;
//     if (i > 2){
//       clearTimeout(TimeoutID);
//     }
// }

// showTime();

// 例外処理

// const user =21
// try{
//   console.log(user.toUpperCase());
// }catch(e){
//   console.log(`${e}というエラーが起きています。`)
// }



// const posts = [
  //   {
    //     text: '投稿内容１',
    //     likeCount: 0,
    //     show(){
      //       console.log(`${this.text}---${this.likeCount}いいね`);
      //     },
      //   },
      //   {
        //     text: '投稿内容2',
        //     likeCount: 0,
        //     show(){
          //       console.log(`${this.text}---${this.likeCount}いいね`);
          //     },
          //   }
          // ]

          // function show(post){
            //   console.log(`${post.text}-${post.likeCount}`)
            // }

// クラス化　練習
class Post{
  constructor(text,like){
    this.text = text;
    this.likeCount = like;
  }
  show(){
    console.log(`${this.text}---${this.likeCount}いいね`)
  }
  like(){
    this.likeCount++
    this.show()
  }
  eternal(){
    for (let i = 0; i <= 10; i++){
      this.likeCount++
      this.show()
    }
  }

  // 静的メソッド
  static showInfo(){
    console.log("静的メソッドです。");
  }
}

const posts =[
  new Post("内容１",5),
  new Post("内容2",3),
]

posts[0].like();
posts[0].eternal();

Post.showInfo()
// setInterval(posts[0].like,1000)

// クラスの継承ー勉強

'use strict';

{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`${this.text} - ${this.likeCount} like`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text)
      this.sponsor = sponsor;
    }

    show() {
      // console.log(`${this.text} - ${this.likeCount} likes`);
      super.show()
      console.log(`... sponsored by ${this.sponsor}`);
    }


  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}
