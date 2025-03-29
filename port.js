const workPage = document.querySelector('.screenWork');
const bioPage = document.querySelector('.screenBio');
const bioRadioButton = document.getElementById('contrasts-on');
const workRadioButton = document.getElementById('contrasts-off');

bioRadioButton.addEventListener('click', showBioPage);
workRadioButton.addEventListener('click', showWorkPage);

function showWorkPage() {
    bioPage.style.display = 'none';
    workPage.style.display = 'flex';
}

function showBioPage() {
    if (window.matchMedia("(max-width: 588px)").matches) {
        bioPage.style.display = 'flex';
    } else {
        bioPage.style.display = 'flex';
    }
    workPage.style.display = 'none';
}

// Optional: Set initial state (Bio page shown)
showBioPage();
console.log("Bio page shown");

// Add an event listener to handle screen resizing
window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 588px)").matches) {
        bioPage.style.display = 'flex';
    } else if (bioRadioButton.checked) {
        bioPage.style.display = 'flex';
    }
});