async function getScores() {
    const res = await fetch("/data.json");
    const scores = res.json();
    return scores;
}


let scores =  await getScores();

let totalScore = 0

for (let i = 0 ;i < 4;i++){
    const scoreType = scores[i].category.toLowerCase()
    const {score} = scores[i];

    totalScore+=score;

    document.querySelector(`[data-score-type="${scoreType}"] .score`).textContent = score;

}

document.querySelector(".result .score").textContent = Math.round(totalScore / 4)
