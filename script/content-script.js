/* 创建用于控制 Google Map Extension 是否生效的组件。*/
// CSS 部分如下：
const bootstrapStyleLink = document.createElement("link");
bootstrapStyleLink.setAttribute("rel", "stylesheet"); 
bootstrapStyleLink.setAttribute("type", "text/css"); 
bootstrapStyleLink.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css");

const customizeStyle = document.createElement("style");
customizeStyle.setAttribute("type", "text/css"); 
customizeStyle.innerHTML = `
  .controlBar {
    position: fixed;
    top: 70px;
    right: 30px;
    z-index: 999;
    background-color: white;
    border: 2px #000 dashed;
    border-radius: 20px;
    font-weight: bold;
  }

  .controlBar .form-check.form-switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 200px;
    padding: 10px;
  }

  .controlBar .form-check-input {
    transform-origin: 0 50%;
    transform: scale(2);
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;

const heads = document.getElementsByTagName("head"); 
heads[0].appendChild(customizeStyle);
heads[0].appendChild(bootstrapStyleLink);

// HTML 部分如下：
const controlBar = document.createElement("div");
controlBar.classList.add("controlBar");
controlBar.innerHTML = `
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked>
    <label for="flexSwitchCheckDefault">Enable Or Disable</label>
  </div>
`;
document.body.appendChild(controlBar);

// JavaScript 部分如下：
window.$extension = {
  isAble: true
};
const controlBarInputEl = document.getElementById("flexSwitchCheckDefault");
controlBarInputEl.addEventListener("change", () => {
  window.$extension.isAble = controlBarInputEl.checked;
  directionButtonGroup.style.display = "none";
});

/* 创建四方按钮。*/
// CSS 部分如下：
const directionButtonGroupStyle = document.createElement("style");
directionButtonGroupStyle.setAttribute("type", "text/css");
directionButtonGroupStyle.innerHTML = `
  #direction-button-group {
    position: fixed;
    z-index: 999;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    height: 90px;
  }
  
  #direction-button-group .first-line, 
  #direction-button-group .second-line, 
  #direction-button-group .third-line {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%
  }
  
  #direction-button-group .second-line {
    justify-content: space-between;
  }
  
  #direction-button-group .icon {
    width: 33.33%;
    height: 100%;
    cursor: pointer;
    
  }
  
  #direction-button-group .icon {
    width: 33.33%;
    height: 100%;
    cursor: pointer;
    fill: #0d6efd;
    transition: fill .25s;
  }
  
  #direction-button-group .icon:hover {
    fill: #699ce6;
  }
`;
heads[0].appendChild(directionButtonGroupStyle);


// HTML 部分如下：
const directionButtonGroup = document.createElement("div");
directionButtonGroup.classList.add("direction-button-group");
directionButtonGroup.id = "direction-button-group";
directionButtonGroup.innerHTML = `
  <div class="first-line">
    <svg class="top icon" style="transform: rotate(-90deg)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path class="top" d="M569.470875 48.519234c0-42.375564 53.166368-67.895421 82.703239-30.088226l361.452537 463.374433a49.149353 49.149353 0 0 1 0 60.255217L652.174114 1005.592622c-29.536871 37.72843-82.703239 12.208573-82.703239-30.166991v-187.69697H74.98427C31.742291 787.728661 0 749.448876 0 705.419247V318.525618c0-44.029629 31.742291-82.388179 74.98427-82.388179H569.470875V48.519234z"></path></svg>
  </div>
  <div class="second-line">
    <svg class="left icon" style="transform: rotate(180deg)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path class="left" d="M569.470875 48.519234c0-42.375564 53.166368-67.895421 82.703239-30.088226l361.452537 463.374433a49.149353 49.149353 0 0 1 0 60.255217L652.174114 1005.592622c-29.536871 37.72843-82.703239 12.208573-82.703239-30.166991v-187.69697H74.98427C31.742291 787.728661 0 749.448876 0 705.419247V318.525618c0-44.029629 31.742291-82.388179 74.98427-82.388179H569.470875V48.519234z"></path></svg>
    <svg class="right icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path class="right" d="M569.470875 48.519234c0-42.375564 53.166368-67.895421 82.703239-30.088226l361.452537 463.374433a49.149353 49.149353 0 0 1 0 60.255217L652.174114 1005.592622c-29.536871 37.72843-82.703239 12.208573-82.703239-30.166991v-187.69697H74.98427C31.742291 787.728661 0 749.448876 0 705.419247V318.525618c0-44.029629 31.742291-82.388179 74.98427-82.388179H569.470875V48.519234z"></path></svg>
  </div>
  <div class="third-line">
    <svg class="bottom icon" style="transform: rotate(90deg)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path class="bottom" d="M569.470875 48.519234c0-42.375564 53.166368-67.895421 82.703239-30.088226l361.452537 463.374433a49.149353 49.149353 0 0 1 0 60.255217L652.174114 1005.592622c-29.536871 37.72843-82.703239 12.208573-82.703239-30.166991v-187.69697H74.98427C31.742291 787.728661 0 749.448876 0 705.419247V318.525618c0-44.029629 31.742291-82.388179 74.98427-82.388179H569.470875V48.519234z"></path></svg>
  </div>
`;
document.body.appendChild(directionButtonGroup);

// JavaScript 部分如下：
directionButtonGroup.addEventListener("click", (e) => {
  if (revealCard.getBoundingClientRect().width === 0) {
    alert("No location selected.");
    return;
  }
  const itemClassList = Array.from(e.target.classList);
  const res = getInfo();
  if (res.imgUrl === null) {
    alert("There are no pictures for this location.");
    return;
  }
  const searchParams = new URLSearchParams(res.imgUrl.search);
  searchParams.set("w", "1080");
  searchParams.set("h", "720");
  if (itemClassList.includes("top")) searchParams.set("yaw", "0");
  else if (itemClassList.includes("left")) searchParams.set("yaw", "270");
  else if (itemClassList.includes("right")) searchParams.set("yaw", "90");
  else searchParams.set("yaw", "180");
  res.imgUrl.search = searchParams.toString();
  chrome.runtime.sendMessage({
    url: res.imgUrl.toString(),
    addressText: res.addressText,
    coordinate: res.coordinate,
  });
});


/* 事件监听逻辑。*/
document.getElementById("scene").addEventListener("click", (e) => {
  if (window.$extension.isAble) {
    directionButtonGroup.style.top = `${e.offsetY - 45}px`;
    directionButtonGroup.style.left = `${e.offsetX - 45}px`;
    directionButtonGroup.style.display = "flex";
  }
});

/* 获取 URL、坐标及地址名。*/
const revealCard = document.querySelector("#reveal-card");
function getInfo() {
  let imgURL = null, addressText = null, coordinate = null;
  try {
    const revealCardInnerDiv = revealCard.childNodes[0];
    const imgButton = revealCardInnerDiv.childNodes[2];
    const imgUrl = imgButton.style.backgroundImage.slice(5, -2);
    const dialogDiv = imgButton.nextElementSibling;
    const infoButton = dialogDiv.childNodes[2];
    const address = infoButton.firstChild;
    addressText = address.textContent;
    const coordinateButtonOuterDiv = dialogDiv.lastChild;
    coordinate = coordinateButtonOuterDiv.lastChild.textContent;
    imgURL = new URL(imgUrl);
  } catch (e) {
    return {
      imgUrl: null,
      addressText,
      coordinate,
    };
  }
  return {
    imgUrl: imgURL,
    addressText,
    coordinate,
  }
}

