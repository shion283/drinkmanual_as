const cocktails = [

{base:"ウィスキー", mixer:"ソーダ", name:"ハイボール☆"},
{base:"ウィスキー", mixer:"コーラ", name:"コークハイ"},
{base:"ウィスキー", mixer:"ジンジャー", name:"ジンジャーハイ☆"},
{base:"ウィスキー", mixer:"水", name:"ウィスキー水割り"},
{base:"ウィスキー", mixer:"お湯", name:"ウィスキーお湯割り"},
{base:"ウィスキー", mixer:"ロック", name:"ウィスキーロック"},
{base:"ウィスキー", mixer:"ストレート", name:"ウィスキーストレート"},

{base:"ジン", mixer:"トニック", name:"ジントニック☆"},
{base:"ジン", mixer:"ソーダ", name:"ジンソーダ☆"},
{base:"ジン", mixer:"ジンジャー", name:"ジンバック☆"},
{base:"ジン", mixer:"ロック", name:"ジンロック"},
{base:"ジン", mixer:"ストレート", name:"ジンストレート"},

{base:"ラム", mixer:"コーラ", name:"ラムコーク☆"},
{base:"ラム", mixer:"ソーダ", name:"ラムソーダ☆"},
{base:"ラム", mixer:"ジンジャー", name:"ラムバック"},
{base:"ラム", mixer:"ロック", name:"ラムロック"},
{base:"ラム", mixer:"ストレート", name:"ラムストレート"},

{base:"カシス", mixer:"オレンジ", name:"カシスオレンジ(カシオレ)☆"},
{base:"カシス", mixer:"ソーダ", name:"カシスソーダ"},
{base:"カシス", mixer:"グレープフルーツ", name:"カシスグレープフルーツ"},
{base:"カシス", mixer:"ウーロン茶", name:"カシスウーロン☆"},

{base:"ピーチ", mixer:"オレンジ", name:"ファジーネーブル☆"},
{base:"ピーチ", mixer:"ウーロン茶", name:"ピーチウーロン☆"},

{base:"マリブ", mixer:"コーラ", name:"マリブコーク☆"},
{base:"マリブ", mixer:"オレンジ", name:"マリブオレンジ"},

{base:"アマレット", mixer:"ジンジャー", name:"アマレットジンジャー☆"},

{base:"モナン パッションフルーツ", mixer:"ソーダ", name:"パッションフルーツソーダ☆"},
{base:"モナン グリーンアップル", mixer:"ソーダ", name:"グリーンアップルソーダ☆"},

{base:"麦焼酎", mixer:"ウーロン茶", name:"ウーロンハイ☆"},
{base:"麦焼酎", mixer:"ソーダ", name:"麦ソーダ"},
{base:"麦焼酎", mixer:"水", name:"麦の水割り"},
{base:"麦焼酎", mixer:"お湯", name:"麦のお湯割り"},
{base:"麦焼酎", mixer:"ロック", name:"麦焼酎ロック"},
{base:"麦焼酎", mixer:"ストレート", name:"麦焼酎ストレート"},

{base:"芋焼酎", mixer:"ウーロン茶", name:"ウーロンハイ☆"},
{base:"芋焼酎", mixer:"ソーダ", name:"芋ソーダ"},
{base:"芋焼酎", mixer:"水", name:"芋の水割り"},
{base:"芋焼酎", mixer:"お湯", name:"芋のお湯割り"},
{base:"芋焼酎", mixer:"ロック", name:"芋焼酎ロック"},
{base:"芋焼酎", mixer:"ストレート", name:"芋焼酎ストレート"},

{base:"梅酒", mixer:"ソーダ", name:"梅酒ソーダ"},
{base:"梅酒", mixer:"水", name:"梅酒水割り"},
{base:"梅酒", mixer:"お湯", name:"梅酒お湯割り"},
{base:"梅酒", mixer:"ロック", name:"梅酒ロック"},
{base:"梅酒", mixer:"ストレート", name:"梅酒ストレート"},

{base:"カルピス", mixer:"水", name:"カルピスウォーター"},
{base:"カルピス", mixer:"ソーダ", name:"カルピスソーダ"},

{base:"自家製レモンスカッシュ", mixer:"ソーダ", name:"自家製レモンスカッシュ"},
{base:"自家製レモンスカッシュ", mixer:"お湯", name:"ホットレモネード"},
{base:"自家製レモンスカッシュ", mixer:"水", name:"レモネード"},

{base:"クラフトジンジャーエール", mixer:"ソーダ", name:"クラフトジンジャーエール"},
{base:"クラフトジンジャーエール", mixer:"お湯", name:"ホットジンジャー"},

{base:"ビール", mixer:"そのまま", name:"ビール"},
{base:"ビール", mixer:"ジンジャー", name:"シャンディガフ"},
{base:"ビール", mixer:"オレンジ", name:"ビターオレンジ"},
{base:"ビール", mixer:"ソーダ", name:"ビアスプリッツァー"},
{base:"ビール", mixer:"自家製レモンスカッシュ ＋ ソーダ", name:"パナシェ"},


{base:"ノンアルコールビール", mixer:"そのまま", name:"ノンアルコールビール"},

{base:"白ワイン", mixer:"そのまま", name:"ワイン"},
{base:"白ワイン", mixer:"ジンジャー", name:"オペレーター"},
{base:"白ワイン", mixer:"ソーダ", name:"スプリッツァー"},

{base:"赤ワイン", mixer:"そのまま", name:"ワイン"},
{base:"赤ワイン", mixer:"ジンジャー", name:"キティ"},
{base:"赤ワイン", mixer:"コーラ", name:"カリモーチョ"},
{base:"赤ワイン", mixer:"オレンジ ＋ グレナデン", name:"ワインクーラー"},
{base:"赤ワイン", mixer:"カシス10mL", name:"カーディナル"},

{base:"スパークリングワイン(乾杯酒)", mixer:"そのまま", name:"スパークリングワイン(乾杯酒)"},
{base:"スパークリングワイン(乾杯酒)", mixer:"オレンジ", name:"ミモザ"},

{base:"日本酒(菊正宗)", mixer:"そのまま", name:"日本酒(菊正宗)の冷酒"},
{base:"日本酒(菊正宗)", mixer:"温め", name:"日本酒(菊正宗)の熱燗"},
{base:"日本酒(菊正宗)", mixer:"常温", name:"日本酒(菊正宗)"},

{base:"獺祭(だっさい)", mixer:"そのまま", name:"獺祭(だっさい)"},

{base:"澪(みお)", mixer:"そのまま", name:"澪(みお)"},

]


document.getElementById("baseFilter").addEventListener("change",displayDrinks)
document.getElementById("mixerFilter").addEventListener("change",displayDrinks)
document.getElementById("glassFilter").addEventListener("change",displayDrinks)
document.getElementById("cocktailSearch").addEventListener("input",displayDrinks)


createBaseList()
displayDrinks()



function createBaseList(){

let bases = [...new Set(cocktails.map(c => c.base))].sort()
let select = document.getElementById("baseFilter")

for(let base of bases){

let option = document.createElement("option")
option.value = base
option.textContent = base

select.appendChild(option)

}

}



function displayDrinks(){

let base = document.getElementById("baseFilter").value
let mixer = document.getElementById("mixerFilter").value
let glass = document.getElementById("glassFilter").value
let search = document.getElementById("cocktailSearch").value.toLowerCase()

let html = ""

let sortedCocktails = [...cocktails].sort((a,b)=>{
return (b.name.includes("☆")?1:0)-(a.name.includes("☆")?1:0)
})


for(let c of sortedCocktails){

if(base && base !== c.base) continue
if(mixer && mixer !== c.mixer) continue
if(search && !c.name.toLowerCase().includes(search)) continue


let cardGlass = "コリンズ"
let handle = ""


if(c.base === "ビール"){
    if(c.mixer === "そのまま"){
        cardGlass = "8oz"
    }else{
        cardGlass = "コリンズ"
    }
}

if(c.base === "白ワイン" || c.base === "赤ワイン"){
cardGlass = "ワイングラス"
}

if(c.base === "ノンアルコールビール"){
cardGlass = "コリンズ"
}

if(c.base === "スパークリングワイン(乾杯酒)"){
cardGlass = "フルート"
}

if(c.base === "日本酒(菊正宗)"){
    if(c.mixer === "温め"){
        cardGlass = "8oz"
        handle = "（取っ手付き）"
    }else{
        cardGlass = "お猪口(おちょこ)"
    }
}

if(c.base === "獺祭(だっさい)"){
cardGlass = "ブラン"
}

if(c.base === "澪(みお)"){
cardGlass = "チビフル"
}

if(c.mixer === "ロック" || c.mixer === "ストレート"){
cardGlass = "8oz"
}

if(c.mixer === "お湯"){
cardGlass = "8oz"
handle = "（取っ手付き）"
}

if(glass && glass !== cardGlass) continue


let recipeHTML = ""

if(c.mixer !== "そのまま"){
recipeHTML = `<p>${c.base} + ${c.mixer}</p>`
}


html += `
<div class="card">
<h3>${c.name}</h3>
${recipeHTML}
<p>グラス：${cardGlass}${handle}</p>
</div>
`

}

document.getElementById("drinkList").innerHTML = html

}
