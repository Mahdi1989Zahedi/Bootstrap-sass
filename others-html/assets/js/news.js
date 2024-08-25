// dark mode //
const page = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", ()=>{
    if (checkbox.checked) {
        page.setAttribute("data-bs-theme", "dark");
        page.setAttribute("color", "white");
    }
    else{
        page.setAttribute("data-bs-theme", "light");
    }

})
// end //




// API //