'use strict';
// console.clear();
{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  // ↓先月分の日にちを作成するための記述
    function getCalenderHead(){
      const dates = [];
      const date = new Date(year, month, 0).getDate();
      const day = new Date(year, month, 1).getDay();

      for (let i = 0; i<day; i++){
        dates.unshift({         //unshiftで、配列を前から埋めていく。
          date: date-i,
          isToday: false,           //先月なので、false
          isDisabled: true,         //先月なので、true
        })
      }
      return dates;
    }
  // ↑先月分の日にちを作成するための記述
  //↓来月分の日付を取得する記述

    function getCalenderTails(){
      const dates = [];
      const lastDay = new Date(year, month+1, 0).getDay();
      for (let i=1; i < 7 - lastDay; i++){
        dates.push({
          date: i,
          isToday: false,
          isDisabled: true,
        });
      }
      return dates;
    }

  //↑来月分の日付を取得する記述

  function getCalenderBody(){
    const dates = [];         //まず、日付を入れるための空配列を作成する。
    const lastDate = new Date(year, month + 1, 0).getDate();  //2020年、6月０日、つまり、５月の最終日を、new Dateで取得しており、.getDateで、実際の最後の日にちの数字だけを取得している。
    for (let i=1; i <= lastDate; i++ ) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    if (year === today.getFullYear() && month === today.getMonth() ){
      dates[today.getDate() - 1].isToday = true
    }

   return dates;
  }

    function clearCalendar(){
      const tbody = document.querySelector('tbody');

      while(tbody.firstChild){                  //tbodyの小要素であるtrを全て消すため
        tbody.removeChild(tbody.firstChild);    //親要素が持つ小要素を全部消す時に使う。
      }
    }

    function renderTitle(){
      const title = `${year}/${String(month + 1).padStart(2,'0')}`;                 // padStart---１桁の値だけど、前に0をつけたい時とかに、padStartを使う。ただし、文字列にしか使えないので、今回はstring()で、数字を文字列に変換している。
      document.getElementById('title').textContent = title;
    }

    function renderWeeks(){
      const dates = [
        ...getCalenderHead(),
        ...getCalenderBody(),
        ...getCalenderTails(),
      ];
      const weeks = [];
      const weeksCount = dates.length / 7 ;     //何週間あるかを抽出
      for (let i = 0; i<7; i++){
        weeks.push(dates.splice(0,7));          //dates配列の０番目から、７個分の数値をweeksにpushする。
      }
// ↓作成したweeksを実際にhtml内に保存していく処理。†
      weeks.forEach(week => {
        const tr = document.createElement('tr');
          week.forEach(date => {
           const td = document.createElement('td');
           td.textContent = date.date;
           if(date.isToday){
             td.classList.add('today');
           };
           if(date.isDisabled){
             td.classList.add('disabled');
           };
           tr.appendChild(td)
          })
          document.querySelector('tbody').appendChild(tr);
      })
    }

  function createCalendar(){      //全てのカレンダーを統合する。
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  createCalendar();

  //↓ 来月と、先月へいくボタンの処理。

  document.getElementById('prev').addEventListener('click',() =>{
    month--;
    if (month < 0){
      year--;
      month = 11;
    }

    createCalendar();
  })

  document.getElementById('next').addEventListener('click',() =>{
    month++;
    if (month > 11){
      year++;
      month = 0;
    }

    createCalendar();
  })

  //↑ 来月と、先月へいくボタンの処理。

  document.getElementById('today').addEventListener('click',() =>{
    year = today.getFullYear();
    month = today.getMonth();

    createCalendar();
  })
}
