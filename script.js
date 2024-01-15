// script.js
document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('guest-name').value;
    const message = document.getElementById('guest-message').value;
    const entry = document.createElement('div');
    entry.innerHTML = `<strong>${name}</strong>: ${message}`;
    document.getElementById('guestbook-entries').appendChild(entry);
    document.getElementById('guestbook-form').reset();
});

// Mock page counter
let counter = 12345; // Starting value
window.onload = function() {
    document.getElementById('page-counter').innerText = `Visitor Count: ${++counter}`;
};
