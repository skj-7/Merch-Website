
let use = document.getElementById('image');
console.log(use.innerHTML)
use.innerHTML = `<img src="/static/a1.jpg" alt="">`;
function run() {
    if (use.innerHTML == `<img src="/static/a1.jpg" alt="">`) {
        use.innerHTML = `<img src="/static/a2.jpg" alt="">`;
    }
    else {
        use.innerHTML = `<img src="/static/a1.jpg" alt="">`;
    }
}
setInterval(run, 2000);
function buy1(){
     let obj={event:"avishkar(1)",price:270}
     console.log(obj)
     return obj;
}

module.exports=buy1;