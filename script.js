'use strict';

//クリックされたボタンのid名取得
function dis_click(clicked_id){
  console.log(clicked_id)
}

//ランダムな数字を1秒おきに出力
let output = function(){
  let result = getRandom(1,28);
  console.log(result)
} 
function getRandom(min,max){
  let random = Math.floor(Math.random() * (max + 1 - min) ) + min;
  return random;
}
// setInterval(output,1000)