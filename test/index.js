//変数
let unko = 'Hello World!';
//console.log(unko);
//定数(finalのこと)
const bigUnko = 'He...llo... Hello World!!'
//console.log(bigUnko);

//配列
let inoki = ['いーち','にー','さーん','ダーーー！！'];
//console.log(inoki[0]);

//ループ処理
// let index = 0;
// while(index < inoki.length){
//   console.log(inoki[index]);
//   index++;
// }

//if else
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ！');
// }

//関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ！');
  }
}

//test(5);

//オブジェクト
const Unko2 = {
  color:'pink',
  size:'large',
  purfume: 'mint',
  //関数もおける。
  goToilet: () => {
    console.log('Hellow World!!!');
  }
};
//console.log(Unko2.goToilet());
//元からあるオブジェクトも存在する。
//ブラウザ全体のオブジェクト
//console.log(window);
//高さとれる
//console.log(window.innerHeight);
//window.alert('Hellow World!!!!!');

//Webブラウザ上で表示しているオブジェクト(ボタンとか)
//console.log(document);

//タグの名前をとってくる
//console.log(document.getElementsByTagName('button'));

//ボタンが推された際の挙動を設定。引数１が条件。ここではクリック。２が挙動。ここではアラート出す。
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('Hellow World!!!');
});
