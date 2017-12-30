var tachanka = "<br>防衛：タチャンカ（マスコットキャラクター）";
var kapkan = "<br>防衛：カプカン(何気強い)";
var fuze = "<br>攻撃：ヒューズ(人質注意！)";
var glaz = "<br>攻撃：グラズ(敵が見やすいのが利点)";
var iq = "<br>攻撃：IQ(ヴィジル見えるの強いぞ)";
var bliz = "<br>攻撃：ブリッズ(盾の中では最強？)";
var bandit = "<br>防衛：バンディット(びりびりうざい)";
var jager = "<br>防衛：イエーガー(ヒューズキラー)";
var thermite = "<br>攻撃：テルミット(バンディット注意)";
var ash = "<br>攻撃：アッシュ(最強オペ)";
var castle = "<br>防衛：キャッスル(地味に役に立つ？)";
var pulse = "<br>防衛：パルス(敵が見えるの強すぎぃ)";
var montagne = "<br>攻撃：モンターニュ(後ろに注意して！)";
var twitch = "<br>攻撃：ツウィッチ(これで敵殺せたらうれしい)";
var doc = "<br>防衛：ドック(戦場の救急救命士)";
var rook = "<br>防衛：ルーク(ACOG使えるよ)";
var sledge = "<br>攻撃：スレッジ(ハンマーで人殺せるよ！！)";
var mute = "<br>防衛：ミュート(ドローンキラー)";
var thatcher = "<br>攻撃：サッチャー(テルミットの相棒？)";
var smoke = "<br>防衛：スモーク(毒ガスの色が草)";
var frost = "<br>防衛：フロスト(玄関あけてフロストあったら怖いな)";
var buck = "<br>攻撃：バック(ノット性的)";
var valkyrie = "<br>防衛：バルキリー(監視カメラ捜査官)";
var blackbeard = "<br>攻撃：ブラックビアード(逆らぺ先輩)";
var caveira = "<br>防衛：キャベイラ(尋問ばばあ)";
var capitao = "<br>攻撃：カピタオ(足早い意味ｗｗｗ)";
var hibana = "<br>攻撃：火花(地味に火花だけ漢字だよ！)";
var echo = "<br>防衛：エコー(エチョー)";
var mira = "<br>防衛：ミラ(マジックミラー号)";
var jackal = "<br>攻撃：ジャッカル(足跡見つける犬)";
var lesion = "<br>防衛：リージョン(ネタ切れや)";
var ying = "<br>攻撃：ヤング(ヤングメイリン)";
var ela = "<br>防衛：エラ(地味に強いオペ)";
var zofia = "<br>攻撃：ゾフィア(ASHの強化版)";
var dokkaebi = "<br>攻撃：ドッケビ(スマホ依存症かな？)";
var vigil = "<br>防衛：ヴィジル(恥ずかしがりや)";
var sinpei = "<br>攻撃・防衛：新兵（神オペ）";
var jogai1 = "一番上の人";
var jogai2 = "上から二番目の人";
var jogai3 = "上から三番目の人";
var jogai4 = "上から四番目の人";
var jogai5 = "最後の人";
var syoumei = 0;



webcolor();
random();


var str = "UNICODE文字列をシフトJISへ";
var sjis = UnescapeUnicode(EscapeSJIS(str));
var str2 = UnescapeSJIS(EscapeUnicode(sjis));
if (str==str2){alert("true");} //=> true


function random()
{

put("レインボーシックスシージ");
put("ランダムオペレーター出力<br>");

put("攻撃を選択：赤　防衛を選択：緑<br>");

put("(!!新シーズン対応!!)");


}

function kougeki()
{
document.body.style.color = ("red");
var random = Math.ceil( Math.random()*19);

if(random == 1)
{

put(sledge);

}else if (random == 2)
{

put(ash);

}else if (random == 3)
{

put(fuze);

}else if (random == 4)
{

put(glaz);

}else if (random == 5)
{

put(iq);

}else if (random == 6)
{

put(bliz);

}else if (random == 7)
{

put(montagne);

}else if (random == 8)
{

put(thermite);

}else if (random == 9)
{

put(thatcher);

}else if (random == 10)
{

put(blackbeard);

}else if (random == 11)
{

put(capitao);

}else if (random == 12)
{

put(jackal);

}else if (random == 13)
{

put(buck);

}else if (random == 14)
{

put(dokkaebi);

}else if (random == 15)
{

put(zofia);

}else if (random == 16)
{

put(hibana);

}else if (random == 17)
{

put(ying);

}else if (random == 18)
{

put(twitch);

}else if (random == 19)
{

put(sinpei);

}


}
function bouei()
{
document.body.style.color = ("green");
var random1 = Math.ceil( Math.random()*19);

if(random1 == 1)
{

put(tachanka);

}else if (random1 == 2)
{

put(kapkan);

}else if (random1 == 3)
{

put(bandit);

}else if (random1 == 4)
{

put(jager);

}else if (random1 == 5)
{

put(castle);

}else if (random1 == 6)
{

put(pulse);

}else if (random1 == 7)
{

put(doc);

}else if (random1 == 8)
{

put(rook);

}else if (random1 == 9)
{

put(mute);

}else if (random1 == 10)
{

put(smoke);

}else if (random1 == 11)
{

put(valkyrie);

}else if (random1 == 12)
{

put(mira);

}else if (random1 == 13)
{

put(echo);

}else if (random1 == 14)
{

put(ela);

}else if (random1 == 15)
{

put(frost);

}else if (random1 == 16)
{

put(caveira);

}else if (random1 == 17)
{

put(lesion);

}else if (random1 == 18)
{

put(vigil);

}else if (random1 == 19)
{

put(sinpei);

}  
}


function reload()
{

location.reload();

}


function put(str)
{

document.body.innerHTML += str +  "<br>";

}

function omake()
{
var random2 = Math.ceil( Math.random()*5);
syoumei += 1;
put("---証明---");
put("ボタンを押した回数は" + syoumei + "です。");
if(random2 == 1)
{

put(jogai1);

}else if(random2 == 2)
{

put(jogai2);

}else if(random2 == 3)
{

put(jogai3);

}else if(random2 == 4)
{

put(jogai4)

}else if(random2 == 5)
{

put(jogai5);

}


}

function webcolor()
{
document.body.style.color ="skyblue";
document.body.style.background = "gray";
document.body.style.fontSize = 200 + '%';
}











