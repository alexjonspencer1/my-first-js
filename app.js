
// Reference needed DOM Elements
const result = document.getElementById('result');
const nameInput = document.getElementById('name');

// Action to take on user event
function updateResult () {
    console.log('function ran');
    result.textContent = nameInput.value;
}