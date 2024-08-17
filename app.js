const text = document.getElementById('text')
const button = document.getElementsByClassName('sub-btn');
const preview = document.getElementById('preview')

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    preview.textContent = text.value;
    });