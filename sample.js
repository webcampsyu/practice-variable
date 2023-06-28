/*変数宣言の種類
[var]
var string = "WEBCAMP"
varのみ再宣言できる

[let]
let string = "WEBCAMP"

[const]
const string = "WEBCAMP"
*/

//varによる再宣言
/*
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)
//console.logを使うと、Consoleタブの中に値が展開される
*/

/*変数の再代入
変数に値を代入した後で、別の値を代入することを再代入と言う
再代入は[var]と[let]で可能
*/

//varによる再代入
/*
var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)
*/

/*スコープ(有効範囲)
グローバルスコープとローカルスコープ
ローカルスコープは[関数スコープ][ブロックスコープ]が存在する
・グローバルスコープ
　どこからでも参照できる変数
・関数スコープ
　関数の中でvarによって宣言された変数
　関数スコープの有効範囲は関数内
　
varでは関数スコープ(ローカルスコープ),グローバルスコープの変数を宣言できる
*/
/*
var str = "webcamp" //グローバルスコープ
function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}
foo()
console.log(y)
*/
/*この場合だと、10行目のconsole.log(y)でエラーが発生します
　エラー内容はyという定義がされていない。参照エラーというもの
　yはfooという関数の中でvarによって宣言された関数スコープである。
　この場合、関数の外からyを参照しようとしても有効範囲外となりエラーになる
*/

/*letのスコープ(constもletと同じブロックスコープ)
letではブロックスコープ（ローカルスコープ）の変数を宣言できる
ブロックとは(),{}の組で区切られたものを指す
*/
/*
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}
 foo()
 */
/*この場合も参照エラーとなる。
 yという変数は3~5行目の{}のブロック内でletによって宣言されたもの
 ブロック外から参照したためエラー
*/
/*
for (let i = 0; i < 10; i++) {
  console.log(i)
}
console.log(i)
/*この場合も参照エラー
 iという変数はfor句の()ブロック内でletによって宣言されたもの
 ブロック外から参照したためエラー
 letによる変数宣言は宣言されたブロック内が有効範囲
*/

//変数の巻き上げ(ホイスティング)

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}
foo()
/*この場合、undefinedと出力される
上記のコードは下記のように記述したものと同じになる
var str = "webcamp"

function foo() {
  var str
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}
foo()

関数の冒頭にvat strがある
初めのコードでは5行目にvar str "dmm webcamp"とあったが
内部的にはvar strの変数宣言の部分が巻き上げられる
つまり変数の巻き上げとは関数内のどの部部で変数を宣言したとしても
関数冒頭で変数を宣言したことになる
また、今回の場合、グローバルスコープのstrという変数と関数スコープのstr
という同名の変数が存在するが、console.log(str)が関数内で使用されているため
関数スコープのstrが参照される
そのため初めのconsole.logで参照されたstrは宣言されたのみの変数で
値は代入されていない(varによって宣言された変数に初期値を入れない場合
自動的にundefinedを初期値として代入される)
*/