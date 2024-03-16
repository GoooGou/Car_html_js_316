const clockContainer = document.querySelector("#clockContainer");
console.log(clockContainer);

const clockElement = document.querySelector("#clock p"); // 使用不同的变量名  
console.log(clockElement);
//设置字体大小的函数
function setFontSize(size) {
    //获取容器的宽度
    const containerWidth = clockContainer.offsetWidth;
    console.log(`父元素窗口大小 ${containerWidth}`);
    // 根据父元素的宽度计算字体大小  
    // 这里我们使用一个简单的线性关系，你可以根据需要调整这个关系
    const baseFontSize = 16; // 基础字体大小  
    console.log(Math.round(containerWidth / 2))
    const fontSize = Math.max(baseFontSize, Math.round(containerWidth / 7)); // 假设每20px宽度对应1px字体大小  
    console.log(`😄子元素字体设置 ${fontSize}`);
    // 设置子元素的字体大小  
    clockElement.style.fontSize = `${fontSize}px`;
}
// 初始设置字体大小  
setFontSize()
clockContainer.addEventListener("resize", () => {
    // 监听窗口大小变化
    log("窗口大小变化");
    const containerWidth = clockContainer.offsetWidth;
    console.log(containerWidth);
    // 重新设置字体大小
    // 延迟执行，以确保在窗口大小变化后获取正确的父元素宽度  
    setTimeout(setFontSize, 100)
}

);
// 为了支持手动调整父元素大小的情况，我们监听窗口大小变化事件  
window.addEventListener('resize', () => {
    // 延迟执行，以确保在窗口大小变化后获取正确的父元素宽度  
    setTimeout(setFontSize, 100);
});  