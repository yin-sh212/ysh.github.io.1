// //随机数函数

// function getRandomInteger(min, max) 
// {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const randomInt = getRandomInteger(1, 100);    
// console.log(randomInt); 

// //模板字符串
// const a = document.querySelector('.xx');
// a.innerHTML = `${ }`;


//轮播图
// 初始数据
const data = [
    {url: 'images/logo.png', title: '这是我们的logo', color: '#e0a64'},
    {url: 'images/biglogo.png', title: '这也是我们的logo', color: 'rgb(254, 128, 55)'},
    {url: 'images/pic.png', title: '这是我们的QQ群头像，so cute!', color: '#e0a64'},
    {url: 'images/gonggao.png', title: '尽职尽责的管理员', color: '#336699'},
    {url: 'images/qq.png', title: '这是我们的QQ群，小登们交流和讨论的地方', color: '#336699'},
    {url: 'images/renshuchange.png', title: '臆想的人数增长情况，祝焦糖越来越好', color: '#336699'},
    {url: 'images/fangxiang.png', title: '各个方向的人数占比，也是窝臆想的', color: '#336699'},
];

// 获取元素
const img = document.querySelector('.slider-wrapper img');
const p = document.querySelector('.slider-footer p');
const footer = document.querySelector('.slider-footer');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider = document.querySelector('.slider');

// 获取所有的li圆点的数组
const indicatorLis = document.querySelectorAll('.slider-indicator li');

let i = 0; // 信号量，控制播放图片张数

// 渲染函数
function toggle(index) {
    i = index;
    img.src = data[i].url;
    p.innerHTML = data[i].title;
    footer.style.backgroundColor = data[i].color;
    // 更换小圆点：先移除原来的类名，再为当前li添加类名
    indicatorLis.forEach(li => li.classList.remove('active'));
    indicatorLis[i].classList.add('active');
}

// 右按钮业务
next.addEventListener('click', function () {
    i = (i + 1) % data.length;
    toggle(i);
});

// 左按钮业务
prev.addEventListener('click', function () {
    i = (i - 1 + data.length) % data.length;
    toggle(i);
});

// 自动播放模块
let timerId = setInterval(() => next.click(), 2000);

// 鼠标经过大盒子，停止定时器
slider.addEventListener('mouseenter', function () {
    clearInterval(timerId);
});

// 鼠标离开大盒子，开启定时器
slider.addEventListener('mouseleave', function () {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => next.click(), 2000);
});


// 点击圆点切换到对应图片
indicatorLis.forEach((li, index) => {
    li.addEventListener('click', function () {
        toggle(index);
    });
});

