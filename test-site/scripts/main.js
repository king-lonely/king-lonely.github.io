/*const myHeading = document.querySelector("h1"); // 选择器获取元素
myHeading.textContent = "Hello World!"; // 修改元素内容
*/
const myImage = document.querySelector("img"); // 选择器获取元素

myImage.onclick = () => {
    // 绑定点击事件
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/google.png"); // 修改元素属性
    } else {
        myImage.setAttribute("src", "images/firefox.png"); // 修改元素属性为原始
    }
};

// 将获取新按钮和标题的引用，并存储到变量中：
let myButton = document.querySelector("button");
let myTitle = document.querySelector("h1");

// 设置个性化欢迎信息的函数。
// 如果 myName 没有值，就再次从头运行setUserName()。如果有值（如果上面的表达式不为真），就把值存储到 localStorage 并设置为标题文本。
function setUserName() {
    const myName = prompt("Please enter your name:"); // 弹出输入框
    if (!myName) {
        setUserName(); // 如果输入为空，则重新调用函数
    } else {
        localStorage.setItem("name", myName); // 将输入内容存储到本地存储中
        myTitle.textContent = `Mozilla is cool, ${myName}!`; // 修改标题内容
    }
}

// 初始化代码
if (!localStorage.getItem("name")) {
    setUserName(); // 如果本地存储中没有name，则调用setUserName函数
} else {
    const storedName = localStorage.getItem("name"); // 从本地存储中获取name
    myTitle.textContent = `Mozilla is cool, ${storedName}!`; // 修改标题内容
}

// 绑定按钮点击事件
myButton.onclick = function () {
    setUserName(); // 调用setUserName函数
};
