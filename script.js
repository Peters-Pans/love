let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "你给我再想想！", 
    "要不再想想?", 
    "呜呜呜 ", 
    "碎掉了…", 
    "不给按！略略略"
];

// **让 NO 按钮持续随机移动**
function moveNoButton() {
    let maxWidth = window.innerWidth - noButton.clientWidth;
    let maxHeight = window.innerHeight - noButton.clientHeight;

    let randomX = Math.random() * maxWidth;
    let randomY = Math.random() * maxHeight;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// 每 0.5 秒移动一次
setInterval(moveNoButton, 500);

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 1.2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // **让 No 按钮瞬间随机移动**
    moveNoButton();

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 25px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "think.png";   // 思考
    if (clickCount === 3) mainImage.src = "angry.png";   // 生气
    if (clickCount === 4) mainImage.src = "crying.png";  // 哭
    if (clickCount >= 5) mainImage.src = "crying.png";  // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">You're my first choice ( >᎑<)♡︎ᐝ</h1>
            <h1 class="yes-text">My eternal first and only!</h1>
            <img src="hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
