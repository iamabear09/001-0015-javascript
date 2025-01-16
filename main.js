const $gameField = document.querySelector(".game__field");
const $score = document.querySelector(".game__score");
const $popUp = document.querySelector(".pop-up");
const $popUpMessage = document.querySelector(".pop-up__message");
const $popUpBtn = document.querySelector(".pop-up > button");
const $gameHeaderBtn = document.querySelector(".game__header > button");
const $gameHeaderBtnIcon = document.querySelector(".game__header > button > i");
const $timer = document.querySelector(".game__timer");

$popUpBtn.addEventListener("click", () => {
    location.reload();
})

let timer = 10;
$timer.textContent = `00:${timer}`;
let interval;
$gameHeaderBtn.addEventListener("click", () => {

    if (!$popUp.classList.contains("pop-up-hidden")) {
        return;
    }

    if ($gameHeaderBtnIcon.classList.contains("fa-play")) {
        $gameHeaderBtnIcon.className = "fa-solid fa-stop"

        interval = setInterval(() => {

            timer--;
            $timer.textContent = timer > 9 ? `00:${timer}` : `00:0${timer}`;

            if (timer === 0) {
                showPopUp("YOU LOST! ⚠️");
                $gameHeaderBtn.classList.add("button-hidden");
            }

        }, 1000);
    } else {
        $gameHeaderBtnIcon.className = "fa-solid fa-play"
        clearInterval(interval);
    }
})

const gameFieldRect = $gameField.getBoundingClientRect();
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
        if (!$popUp.classList.contains("pop-up-hidden") || $gameHeaderBtnIcon.classList.contains("fa-play")) {
            return;
        }

        if (event.target.classList.contains("game__bug")) {
            onClickBug();
            return;
        }
        onClickCarrot($target);

    });

    return $target;
}

function showPopUp(message) {
    $popUpMessage.textContent = message;
    $popUp.classList.remove("pop-up-hidden");
    clearInterval(interval);
}

function onClickBug() {
    showPopUp("YOU LOST ⚠️");
}

function onClickCarrot($carrot) {
    $carrot.remove();
    let score = Number($score.textContent);
    score--;
    $score.textContent = String(score);

    if (score === 0) {
        showPopUp("YOU WIN  🎉️")
    }
}

//TODO: 당근 화면 밖에서 생성되는 버그 수정 → 모르겠다...

