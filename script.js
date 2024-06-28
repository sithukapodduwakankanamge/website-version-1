let readMoreButton = document.getElementById('read-more-button');
let hiddenText = document.querySelector('.hidden-text');

readMoreButton.addEventListener('click', function() {
  hiddenText.style.display = 'inline';
  readMoreButton.innerHTML = 'Read Less';
});