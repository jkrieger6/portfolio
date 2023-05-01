const themeBtn = document.getElementById("#theme-toggle");
const body = document.querySelector("body");
const linkedinBtn = document.getElementById("#linkedinBtn");
const gitBtn = document.getElementById("#gitBtn");

// Event listener for Linkedin/GitHub button
linkedinBtn.addEventListener('click', function() {
    window.location.href("https://www.linkedin.com/in/jacob-krieger-043066b8/");
});

gitBtn.addEventListener('click', function(){
    window.open("https://github.com/jkrieger6");
});

// Event listener for theme button
themeBtn.addEventListener('click', toggleTheme(){
    if(document.getAttribute("href") == "assets/css/light.css"){
        document.setAttribute("href", "assets/css/style.css");
    } else {
        body.setAttribute("href", "assets/css/light-theme.css");
    }
});