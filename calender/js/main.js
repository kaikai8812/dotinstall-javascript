'use strict';
// console.clear();
{
  const year = 2020;
  const month = 4;  //５月を表している。

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
   return dates;
  }

  function createCalendar(){
    const dates = [
      ...getCalenderHead(),
      ...getCalenderBody(),
      ...getCalenderTails(),
    ];
    console.log(dates)

  }
  createCalendar();
}
