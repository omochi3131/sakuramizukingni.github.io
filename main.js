var tachanka = "防衛：タチャンカ（マスコットキャラクター）";
var kapkan = "防衛：カプカン(何気強い)";
var fuze = "攻撃：ヒューズ(人質注意！)";
var glaz = "攻撃：グラズ(敵が見やすいのが利点)";
var iq = "攻撃：IQ(ヴィジル見えるの強いぞ)";
var bliz = "攻撃：ブリッズ(盾の中では最強？)";
var bandit = "防衛：バンディット(びりびりうざい)";
var jager = "防衛：イエーガー(ヒューズキラー)";
var thermite = "攻撃：テルミット(バンディット注意)";
var ash = "攻撃：アッシュ(最強オペ)";
var castle = "防衛：キャッスル(地味に役に立つ？)";
var pulse = "防衛：パルス(敵が見えるの強すぎぃ)";
var montagne = "攻撃：モンターニュ(後ろに注意して！)";
var twitch = "攻撃：ツウィッチ(これで敵殺せたらうれしい)";
var doc = "防衛：ドック(戦場の救急救命士)";
var rook = "防衛：ルーク(ACOG使えるよ)";
var sledge = "攻撃：スレッジ(ハンマーで人殺せるよ！！)";
var mute = "防衛：ミュート(ドローンキラー)";
var thatcher = "攻撃：サッチャー(テルミットの相棒？)";
var smoke = "防衛：スモーク(毒ガスの色が草)";
var frost = "防衛：フロスト(玄関あけてフロストあったら怖いな)";
var buck = "攻撃：バック(ノット性的)";
var valkyrie = "防衛：バルキリー(監視カメラ捜査官)";
var blackbeard = "攻撃：ブラックビアード(逆らぺ先輩)";
var caveira = "防衛：キャベイラ(尋問ばばあ)";
var capitao = "攻撃：カピタオ(足早い意味ｗｗｗ)";
var hibana = "攻撃：火花(地味に火花だけ漢字だよ！)";
var echo = "防衛：エコー(エチョー)";
var mira = "防衛：ミラ(マジックミラー号)";
var jackal = "攻撃：ジャッカル(足跡見つける犬)";
var lesion = "防衛：リージョン(ネタ切れや)";
var ying = "攻撃：ヤング(ヤングメイリン)";
var ela = "防衛：エラ(地味に強いオペ)";
var zofia = "攻撃：ゾフィア(ASHの強化版)";
var dokkaebi = "攻撃：ドッケビ(スマホ依存症かな？)";
var vigil = "防衛：ヴィジル(恥ずかしがりや)";

var str = "UNICODE文字列をシフトJISへ";
var sjis = UnescapeUnicode(EscapeSJIS(str));
var str2 = UnescapeSJIS(EscapeUnicode(sjis));
if (str==str2){alert("true");} //=> true


webcolor();
random();



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
var random = Math.ceil( Math.random()*18);

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

}


}
function bouei()
{
document.body.style.color = ("green");
var random1 = Math.ceil( Math.random()*18);

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

put("攻撃・防衛：新兵(地味に最強！除外注意！)")

}

function webcolor()
{
document.body.style.color ="skyblue";
document.body.style.background = "gray";
document.body.style.fontSize = 200 + '%';
}











