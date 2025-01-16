const $gameField = document.querySelector(".game__field");
const gameFieldRect = $gameField.getBoundingClientRect();

const $score = document.querySelector(".game__score");
const $popUp = document.querySelector(".pop-up");
const $popUpMessage = document.querySelector(".pop-up__message");
const $popUpBtn = document.querySelector(".pop-up > button");
$popUpBtn.addEventListener("click", () => {
    location.reload();
})

for (let i = 0; i < Number($score.textContent); i++) {
    $gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
    $gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
}

function createImgTarget(type, top, left) {
    const $target = document.createElement("img");
    $target.src = `./img/${type}.png`;
    $target.classList.add(`game__${type}`);

    $target.style.top = `${top > $target.height ? top - $target.height : top}px`;
    $target.style.left = `${left > $target.height ? left - $target.height : left}px`;


    $target.addEventListener("click", (event) => {
            if (event.target.classList.contains("game__bug")) onClickBug();
            onClickCarrot($target)
        }
    );

    return $target;
}

function onClickBug() {
    $popUpMessage.textContent = "YOU LOST ⚠️";
    $popUp.classList.remove("pop-up-hidden");
}

function onClickCarrot($carrot) {
    $carrot.remove();
    let score = Number($score.textContent);
    score--;
    $score.textContent = String(score);

    if (score === 0) {
        $popUpMessage.textContent = "YOU WIN  🎉️";
        $popUp.classList.remove("pop-up-hidden");
    }
}
