

// dark mode //
const page = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", ()=>{
    if (checkbox.checked) {
        page.setAttribute("data-bs-theme", "dark");
    }
    else{
        page.setAttribute("data-bs-theme", "light");
    }

})
// End of dark mide //



// start btn //
const btn = document.getElementById("btn-hidden");
const informaitiom = document.getElementById("info-car");


btn.addEventListener("click", event => {

    if (informaitiom.style.display === "inline") {

        informaitiom.style.display = "none"
        btn.textContent = "اطلاعات بیشتر"
        btn.style.backgroundColor = " var(--color-btn)"
    }
    else {
        informaitiom.style.display = "inline"
        btn.textContent = "بازگشت"
        btn.style.backgroundColor = "red"
    }

})

const btn2 = document.getElementById("btn-hidden-2");
const informaitiom2 = document.getElementById("info-car-2");


btn2.addEventListener("click", event => {

    if (informaitiom2.style.display === "inline") {

        informaitiom2.style.display = "none"
        btn2.textContent = "اطلاعات بیشتر"
        btn2.style.backgroundColor = " var(--color-btn)"

    }
    else {
        informaitiom2.style.display = "inline"
        btn2.textContent = "بازگشت"
        btn2.style.backgroundColor = "red"
    }

})

const btn3 = document.getElementById("btn-hidden-3");
const informaitiom3 = document.getElementById("info-car-3");


btn3.addEventListener("click", event => {

    if (informaitiom3.style.display === "inline") {

        informaitiom3.style.display = "none"
        btn3.textContent = "اطلاعات بیشتر"
        btn3.style.backgroundColor = " var(--color-btn)"

    }
    else {
        informaitiom3.style.display = "inline"
        btn3.textContent = "بازگشت"
        btn3.style.backgroundColor = "red"
    }

})

const btn4 = document.getElementById("btn-hidden-4");
const informaitiom4 = document.getElementById("info-car-4");


btn4.addEventListener("click", event => {

    if (informaitiom4.style.display === "inline") {

        informaitiom4.style.display = "none"
        btn4.textContent = "اطلاعات بیشتر"
        btn4.style.backgroundColor = " var(--color-btn)"

    }
    else {
        informaitiom4.style.display = "inline"
        btn4.textContent = "بازگشت"
        btn4.style.backgroundColor = "red"
    }

})
// End of btn //


             


// start Animation //

const start = ScrollReveal({
    origin : "top",
    distance : "60px",
    duration : "2500",
    delay : "400"
})

start.reveal(".about")
start.reveal(".servise" , {origin: "right"})

start.reveal(".Counter", {origin: "right"})

start.reveal(".sujest", {origin: "right"})
start.reveal(".contact", {origin: "right"})
start.reveal(".question", {origin: "right"})

start.reveal(".home", {origin: "right"})

start.reveal(".review", {origin: "right"})

start.reveal(".footer", {origin: "right"})

// End of Animation //




// start API //
let fetchData = () => {
    let html = ""
    fetch("http://localhost:3000/prodouct")
        .then((data) => data.json())
        .then((res) => {
            res.forEach((element) => {
                html += `
                <div class="prodouct-item">
            <div class="row">
                <div class="col-12 col-lg-7 image-car ">
                    <img src="${element.image}" alt="">
                </div>

                <div class=" col-12 col-lg-5 informaition-car">
                    <div class="name-car d-flex justify-content-between">
                        <div class="name">${element.name}</div>
                        <div class="left">
                            <i class="fa-solid fa-paperclip"></i>
                            <span>کارشناسی شده</span><i class="icon-save-favorite"></i>
                        </div>
                    </div>
                    <div class="about d-flex justify-content-between">
                        <div class="items">
                            <div class="item">IE (فول)</div>
                            <div class="item">اتوماتیک</div>
                            <div class="item">کارکرد : صفر</div>
                        </div>
                        <div class="icons">
                            <i class="fa-regular fa-bookmark"></i>
                            <i class="fa-solid fa-share"></i>
                        </div>
                    </div>
                    <div class="lineer"></div>
                    <div class="security">
                        <i class="fa-solid fa-shield-halved"></i><span>ضمانت 7 روزه کارشناسی همراه مکانیک</span>
                    </div>
                    <div class="lineer"></div>
                    <div class="gheimat d-flex justify-content-between">
                        <span>قیمت کارشناسی شده : </span>
                        <span class="gheimat">${element.gheimat}</span>
                    </div>
                    <div class="installments">
                        <div class="installments-title d-flex">
                            <div class="image"><img src="./assets/image/prodouct/short-term.svg" alt="image"></div>
                            <div class="title"><h5 class="title">خرید با اقساط کوتاه مدت</h5></div>
                        </div>
                        <div class="paragraf">
                            <p class="paragraf">
                                با اقساط کوتاه مدت همراه‌مکانیک همین امروز بخر و تا ۳ ماه بعد پرداخت کن.
                            </p>
                        </div>
                    </div>
                    <div class="button">
                        <button class="cash">خرید نقدی</button>
                        <button class="installments">خرید اقصادی</button>
                    </div>
                </div>
            </div>
         </div>
         `
            })
            document.querySelector("div.prodouct").innerHTML=html

        })

}
document.addEventListener("DOMContentLoaded", fetchData)

// End of API //