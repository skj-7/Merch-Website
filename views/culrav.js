
let use = document.getElementById('image');
console.log(use.innerHTML)
use.innerHTML = `<img src="/static/c2.jpg" alt="">`;
function run() {
    if (use.innerHTML == `<img src="/static/c2.jpg" alt="">`) {
        use.innerHTML = `<img src="/static/c1.jpg" alt="">`;
    }
    else {
        use.innerHTML = `<img src="/static/c2.jpg" alt="">`;
    }
}
setInterval(run, 2000);
let use1 = document.getElementById('image1');
console.log(use1.innerHTML)
use1.innerHTML = `<img src="/static/c4.jpg" alt="">`;
function run1() {
    if (use1.innerHTML == `<img src="/static/c4.jpg" alt="">`) {
        use1.innerHTML = `<img src="/static/c3.jpg" alt="">`;
    }
    else {
        use1.innerHTML = `<img src="/static/c4.jpg" alt="">`;
    }
}
setInterval(run1, 2000);
let use2 = document.getElementById('image2');
console.log(use1.innerHTML)
use2.innerHTML = `<img src="/static/c5.jpg" alt="">`;
function run2() {
    if (use2.innerHTML == `<img src="/static/c5.jpg" alt="">`) {
        use2.innerHTML = `<img src="/static/c6.jpg" alt="">`;
    }
    else {
        use2.innerHTML = `<img src="/static/c5.jpg" alt="">`;
    }
}
setInterval(run2, 2000);
