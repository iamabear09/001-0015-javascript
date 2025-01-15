const $gameField = document.querySelector(".game__field");
const gameFieldRect = $gameField.getBoundingClientRect();

$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("bug", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));
$gameField.append(createImgTarget("carrot", Math.random() * gameFieldRect.height, Math.random() * gameFieldRect.width));

function createImgTarget(type, top, left) {
    const $target = document.createElement("img");
    $target.src = `./img/${type}.png`;
    $target.classList.add(`game__${type}`);

    $target.style.top = `${top > $target.height ? top - $target.height : top}px`;
    $target.style.left = `${left > $target.height ? left - $target.height : left}px`;

    return $target;
}
