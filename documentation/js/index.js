const themeBtn = document.getElementById("theme-btn");
const mainSec = document.querySelectorAll(".container");
const themeImg = document.getElementById("theme-img");

const btnAll = document.getElementById('btnAll');
const btnActive = document.getElementById('btnActive');
const btnInactive = document.getElementById('btnInactive');

const removeButtons = document.querySelectorAll('.remove-btn');

function changeColor(event) {
    themeBtn.classList.toggle("dark-theme-sec");

    document.body.classList.toggle("dark-theme");

    mainSec.forEach(section => {
        section.classList.toggle("dark-theme-sec");
    });

    if (themeImg.src.includes("icon-moon")) {
        themeImg.src = "/documentation/images/icon-sun.svg";
    } else {
        themeImg.src = "/documentation/images/icon-moon.svg";
    }
}

themeBtn.addEventListener("click", changeColor);

btnAll.addEventListener('click', () => {
  mainSec.forEach(container => {
    container.style.display = 'block'; // show all
  });
});

btnActive.addEventListener('click', () => {
  mainSec.forEach(container => {
    const checkbox = container.querySelector('.toggle-btn input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      container.style.display = 'block'; // show checked
    } else {
      container.style.display = 'none';  // hide unchecked
    }
  });
});

btnInactive.addEventListener('click', () => {
  mainSec.forEach(container => {
    const checkbox = container.querySelector('.toggle-btn input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
      container.style.display = 'block'; // show unchecked
    } else {
      container.style.display = 'none';  // hide checked
    }
  }); 
});

removeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const container = button.closest('.container');
    if (container) {
      container.remove(); // Completely deletes the container element
    }
  });
});