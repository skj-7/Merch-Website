
let use = document.getElementById('image');
console.log(use.innerHTML)
use.innerHTML = `<img src="/static/e1.jpg" alt="">`;
function run() {
    if (use.innerHTML == `<img src="/static/e1.jpg" alt="">`) {
        use.innerHTML = `<img src="/static/e2.jpg" alt="">`;
    }
    else {
        use.innerHTML = `<img src="/static/e1.jpg" alt="">`;
    }
}
setInterval(run, 2000);
