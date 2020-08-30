let use = document.getElementById('image');
console.log(use.innerHTML)
use.innerHTML = `<img src="/static/m3.jpg" alt="">`;
function run() {
    if (use.innerHTML == `<img src="/static/m3.jpg" alt="">`) {
        use.innerHTML = `<img src="/static/m4.jpg" alt="">`;
    }
    else {
        use.innerHTML = `<img src="/static/m3.jpg" alt="">`;
    }
}
setInterval(run, 2000);
let use1 = document.getElementById('image1');
console.log(use1.innerHTML)
use1.innerHTML = `<img src="/static/m1.jpg" alt="">`;
function run1() {
    if (use1.innerHTML == `<img src="/static/m1.jpg" alt="">`) {
        use1.innerHTML = `<img src="/static/m2.jpg" alt="">`;
    }
    else {
        use1.innerHTML = `<img src="/static/m1.jpg" alt="">`;
    }
}
setInterval(run1, 2000);
let use2 = document.getElementById('image2');
console.log(use1.innerHTML)
use2.innerHTML = `<img src="/static/h2 (2).jpg" alt="">`;
function run2() {
    if (use2.innerHTML == `<img src="/static/h2 (2).jpg" alt="">`) {
        use2.innerHTML = `<img src="/static/h1.jpg" alt="">`;
    }
    else {
        use2.innerHTML = `<img src="/static/h2 (2).jpg" alt="">`;
    }
}
setInterval(run2, 2000);