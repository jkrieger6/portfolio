const themeBtn = document.getElementById("#theme-toggle");
const body = document.querySelector("body");

// Toggle theme
function toggleTheme() {
    if (document.getAttribute("href") == "assets/css/light.css") {
        document.setAttribute("href", "assets/css/style.css");
    } else {
        body.setAttribute("href", "assets/css/light-theme.css");
    }
}

// Event listener
themeBtn.addEventListener("click", toggleTheme);