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
                            <div class="image"><img src="./assets/images/prodouct/short-term.svg" alt="image"></div>
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