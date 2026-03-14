let drinks = {}

const mixers = [

"ソーダ",
"コーラ",
"ジンジャー",
"トニック",
"オレンジ",
"アップル",
"グレープフルーツ",
"ウーロン茶",
"水",
"お湯",
"ミルク",
"ロック"

]



const allowedMixers = {
    "モナン パッションフルーツ": ["ソーダ"],
    "モナン グリーンアップル": ["ソーダ"],
    "カシス": ["オレンジ","ソーダ","グレープフルーツ","ウーロン茶","ジンジャー","コーラ","アップル"],
    "ピーチ": ["ソーダ","オレンジ","アップル", "ウーロン茶","グレープフルーツ"],
    "マリブ": ["コーラ","オレンジ"],
    "ジン": ["トニック","ソーダ","ジンジャー","ロック"],
    "ウィスキー": ["ソーダ","コーラ","ジンジャー","水","お湯","ロック"],
    "ラム": ["コーラ","ソーダ","ジンジャー","ロック"],
    "アマレット": ["ジンジャー","ミルク","グレープフルーツ","オレンジ"],
    "麦焼酎": ["ウーロン茶","ソーダ","水","お湯","ロック"],
    "芋焼酎": ["ウーロン茶","ソーダ","水","お湯","ロック"],
    "梅酒": ["ソーダ","水","お湯","ロック"],
    "カルピス":["水","ソーダ"],
    "自家製レモンスカッシュ":["ソーダ","お湯","水"],
    "クラフトジンジャーエール":["ソーダ","お湯"]
}

/* 正式カクテル名 */

const cocktailNames = {

"ウィスキー_ソーダ":"ハイボール☆",
"ウィスキー_コーラ":"コークハイ",
"ウィスキー_ジンジャー":"ジンジャーハイ☆",
"ウィスキー_水":"ウィスキー水割り",
"ウィスキー_お湯":"ウィスキーお湯割り",

"ジン_トニック":"ジントニック☆",
"ジン_ソーダ":"ジンソーダ☆",
"ジン_ジンジャー":"ジンバック☆",

"ラム_コーラ":"ラムコーク☆",
"ラム_ソーダ":"ラムソーダ☆",
"ラム_ジンジャー":"ラムバック",

"カシス_オレンジ":"カシスオレンジ(カシオレ)☆",
"カシス_ソーダ":"カシスソーダ",
"カシス_グレープフルーツ":"カシスグレープフルーツ",
"カシス_ウーロン茶":"カシスウーロン☆",

"ピーチ_オレンジ":"ファジーネーブル☆",
"ピーチ_ウーロン茶":"ピーチウーロン☆",

"マリブ_コーラ":"マリブコーク☆",
"マリブ_オレンジ":"マリブオレンジ",

"アマレット_ジンジャー":"アマレットジンジャー☆",

/* モナン */

"モナン パッションフルーツ_ソーダ":"パッションフルーツソーダ☆",
"モナン グリーンアップル_ソーダ":"グリーンアップルソーダ☆",

"麦焼酎_ウーロン茶":"ウーロンハイ☆",
"麦焼酎_ソーダ":"麦ソーダ",
"麦焼酎_水":"麦の水割り",
"麦焼酎_お湯":"麦のお湯割り",
"芋焼酎_ウーロン茶":"ウーロンハイ☆",
"芋焼酎_ソーダ":"芋ソーダ",
"芋焼酎_水":"芋の水割り",
"芋焼酎_お湯":"芋のお湯割り",
"カルピス_水":"カルピスウォーター",
"カルピス_ソーダ":"カルピスソーダ",
"自家製レモンスカッシュ_ソーダ":"自家製レモンスカッシュ",
"自家製レモンスカッシュ_お湯":"ホットレモネード",
"自家製レモンスカッシュ＿水":"レモネード",
"クラフトジンジャーエール＿ソーダ":"クラフトジンジャーエール",
"クラフトジンジャーエール_お湯":"ホットジンジャー"

}



fetch("drinks.json")

.then(res => res.json())

.then(data => {

drinks = data

createBaseList()

displayDrinks()

})


document.getElementById("baseFilter").addEventListener("change",displayDrinks)
document.getElementById("mixerFilter").addEventListener("change",displayDrinks)
document.getElementById("glassFilter").addEventListener("change",displayDrinks)
document.getElementById("cocktailSearch").addEventListener("input",displayDrinks)



function createBaseList(){

let select = document.getElementById("baseFilter")

for(let base in drinks){

let option = document.createElement("option")

option.value = base
option.textContent = base

select.appendChild(option)

}

}



function displayDrinks(){

let base =
document.getElementById("baseFilter").value

let mixer =
document.getElementById("mixerFilter").value

let glass =
document.getElementById("glassFilter").value

let search =
document.getElementById("cocktailSearch").value.toLowerCase()

let html = ""


// 既存のforループ
for(let baseName in drinks){

    if(base && base !== baseName) continue

    for(let m of mixers){

        if(mixer && mixer !== m) continue

        // ★ ベースごとの割り材制限
        if (allowedMixers[baseName] && !allowedMixers[baseName].includes(m)) continue

        let key = baseName + "_" + m
        let cocktailName = cocktailNames[key] || (baseName + m)

        if(search && !cocktailName.toLowerCase().includes(search)) continue

        html += `
        <div class="card">
          <h3>${cocktailName}</h3>
          <p>${baseName} + ${m}</p>
          <p>グラス：${glass || "コリンズ"}</p>
        </div>
        `
    }
}

document.getElementById("drinkList").innerHTML = html

}
