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
controlBar.classList.add("controlBar")
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
});

/* 创建四方按钮。*/
// CSS 部分如下：


// HTML 部分如下：


// JavaScript 部分如下：





/* 事件监听逻辑。*/
document.getElementById("scene").addEventListener("click", (e) => {
  if (window.$extension.isAble) console.log("监听到了点击事件");
  else console.log("没有监听到");
});


/* 下载逻辑。*/


