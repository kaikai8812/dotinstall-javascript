'use strict'

  function createColumn(col) {
    const source = [];
    for (let i= 0; i<15; i++) {
    source[i] = i + 1 + (15*col);
    }

    // Math.floor(Math.random() * source.length);
    const column = [];
    for (let i =0; i<5; i++){
    column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    }

    return column;        //returnを記述しないと、値は返せないよ！！きをつけて！！

  }


function createColumns(){
  const columns = []
  for (let i=0; i<5; i++){
    columns[i] = createColumn(i)
  }
  columns[2][2] = 'FREE';
return columns;

}


// 反転作業
// function createBingo(){
//   const bingo = [];
//   for (let row = 0; row < 5; row++) {
//     bingo[row] = [];
//     for (let col = 0; col < 5; col++){
//       bingo[row][col] = columns[col][row];
//     };
//   };
//   return bingo;
// }

// console.table(bingo)
// console.log(bingo[0])

function renderBingo(columns){
  for (let row =0; row<5; row++){                     //５行文を繰り返す処理
    const tr = document.createElement('tr')  //trを作成
    for (let col = 0; col < 5; col++){         //数字一つ一つ（1行）の繰り返し処理
    const td = document.createElement('td')        //tdを作成
    td.textContent = columns[col][row]                 //tdに一行目の数字を代入//bingo=>columnsに変え、rowとcolを逆にして、上記の反転作業がなくてもいいようにしている。
    tr.appendChild(td)                             //trに、tdを入れる。
    }
    document.querySelector('tbody').appendChild(tr) //tbodyに、tr(配列)を、小要素として代入
  }
}

const columns = createColumns();

// const bingo = createBingo()

renderBingo(columns)
