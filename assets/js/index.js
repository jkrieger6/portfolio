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

// Form submission handler to send form to email
async function newFormHandler(event) {
    event.preventDefault();
    const dish_name = document.querySelector('#dish_name').value;
    const description = document.querySelector('#description').value;
    const guest_name = document.querySelector('#guest_name').value;
    const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
  
    const response = await fetch(`/api/dish`, {
      method: 'POST',
      body: JSON.stringify({
        dish_name,
        description,
        guest_name,
        has_nuts,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
  