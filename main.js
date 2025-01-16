const $gameField = document.querySelector(".game__field");
const gameFieldRect = $gameField.getBoundingClientRect();

const $score = document.querySelector(".game__score");
const $popUp = document.querySelector(".pop-up");
const $popUpMessage = document.querySelector(".pop-up__message");
const $popUpBtn = document.querySelector(".pop-up > button");
$popUpBtn.addEventListener("click", () => {
    location.reload();
})

const $gameHeaderBtn = document.querySelector(".game__header > button");
const $gameHeaderBtnIcon = document.querySelector(".game__header > button > i");
$gameHeaderBtn.addEventListener("click", () => {
    if ($gameHeaderBtnIcon.classList.contains("fa-play")) {
        $gameHeaderBtnIcon.classList.remove("fa-play");
        $gameHeaderBtnIcon.classList.add("fa-stop");
        return;
    }

    if ($gameHeaderBtnIcon.classList.contains("fa-stop")) {
        $gameHeaderBtnIcon.classList.remove("fa-stop");
        $gameHeaderBtnIcon.classList.add("fa-play");
    }

    //TODO: Count Down 기능을 추가해야한다.

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
            if (event.target.classList.contains("game__bug")) {
                onClickBug();
                return;
            }

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

//TODO: Pop Up Message 이후 게임 진행 안되도록 설정
//TODO: 시간 제한 추가
//TODO: 당근 화면 밖에서 생성되는 버그 수정 → 모르겠다...

