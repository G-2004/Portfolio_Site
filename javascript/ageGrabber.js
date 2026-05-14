//set birthday
const birthDate = new Date(2004, 9, 23); // months start at 0 up to 11

function calculateAge(date) {
    const today = new Date();

    let age = today.getFullYear() - date.getFullYear();

    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();

    // If birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

document.addEventListener("DOMContentLoaded", () => {
    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.textContent = calculateAge(birthDate);
    }
});