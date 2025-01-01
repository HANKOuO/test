// 隨機選擇一隻小動物
window.onload = () => {
  const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵'];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  document.querySelector('.mouse-follower').innerText = randomAnimal;
};

// 平滑移動效果
let posX = 0, posY = 0;
const speed = 0.1;

document.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

// 計算平滑移動的效果
posX += (mouseX - posX) * speed;
posY += (mouseY - posY) * speed;

  const follower = document.querySelector('.mouse-follower');
  follower.style.transform = `translate(${posX - 15}px, ${posY - 15}px)`;  // 設定小動物的位置
});

document.addEventListener("DOMContentLoaded", () => {
  // 取得元素
  const exploreBtn = document.getElementById("exploreBtn");
  const modal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close-btn");
  const loginForm = document.getElementById("loginForm");
  const captchaCodeElement = document.getElementById("captchaCode");

  // 隨機生成驗證碼
  const captchaCode = Math.floor(1000 + Math.random() * 9000); // 生成 4 位數驗證碼

  // 顯示驗證碼
  captchaCodeElement.textContent = `驗證碼: ${captchaCode}`;

  // 當按下探索更多時顯示表單
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault(); // 防止默認跳轉
    modal.style.display = "flex"; // 顯示彈出框
  });

  // 關閉彈出框
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // 關閉彈出框
  });

  // 當提交表單時
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 防止表單刷新頁面

    const name = document.getElementById("name").value;
    const captcha = document.getElementById("captcha").value;

    // 檢查驗證碼是否正確
    if (captcha == captchaCode) {
      alert("驗證成功，歡迎進入主頁！");
      modal.style.display = "none"; // 關閉彈出框
      window.location.href = "#welcome"; // 跳轉到主頁
    } else {
      alert("驗證碼錯誤，請再試一次！");
    }
  });
});

// 圖片切換函數
let i=0, imgArr=new Array();
imgArr[0] = "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/455523214_1972032316576922_3869848256636945610_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=TBIvi8wlIi8Q7kNvgFUds7k&_nc_zt=24&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AiQVxVB8m-dEgH6Jcee3lxz&oh=00_AYDZxyeSQs277YQTZRnM-HylEof5ZkO5r4T6yFnsuIuL1w&oe=6773CF08"
imgArr[1] = "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/471523465_2076248139488672_3678725395352880819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=G3iU_mhgH5UQ7kNvgE9pGAx&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AjDSmit5GBX5rOToP8VpVjI&oh=00_AYDH8raxbCC73bB8OJAxdNoTSCIXEwyYxUanhL2xmTKc4A&oe=6773C13C"
imgArr[2] = "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/470172650_2076249066155246_5597388244620748616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nRAkjHU5C88Q7kNvgFTaZPO&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=A9UHj3w2KmD3nZToS05eLSY&oh=00_AYCjGI0Xo9VwKV8uNfMRwQuX8bCFVLahs1TRFHHqgxuK1g&oe=6773C753"

function showImg(){
  document.getElementById('ico').src = imgArr[i];
  i=(i+1) % 3;
}

function show(){
  setInterval(showImg, 3000);
}