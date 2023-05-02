const themeBtn = document.getElementById("#theme-toggle");
const body = document.querySelector("body");
const linkedinBtn = document.getElementById("#linkedinBtn");
const gitBtn = document.getElementById("#gitBtn");

// Event listener for Linkedin/GitHub button
linkedinBtn.addEventListener('click', renderLinkedin());

function renderLinkedin (){
    linkedinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/';
      });
};

gitBtn.addEventListener('click', renderGitHub());

function renderGitHub (){
    gitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/';
        });
};

// Event listener for theme button
// themeBtn.addEventListener('click', toggleTheme(){
//     if(document.getAttribute("href") == "assets/css/light.css"){
//         document.setAttribute("href", "assets/css/style.css");
//     } else {
//         body.setAttribute("href", "assets/css/light-theme.css");
//     }
// });