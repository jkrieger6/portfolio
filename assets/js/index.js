const themeBtn = document.getElementById(".theme-btn");
const body = document.querySelector("body");

// Event listener for theme button
themeBtn.addEventListener('click', toggleTheme(){
    if(document.getAttribute("href") == "assets/css/light.css"){
        document.setAttribute("href", "assets/css/style.css");
    } else {
        body.setAttribute("href", "assets/css/light-theme.css");
    }
});