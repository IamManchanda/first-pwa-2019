var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

function animate() {
  title.classList.remove('animate-in');
  for (var i = 0; i < courseFeatureElements.length; i++) {
    courseFeatureElements[i].classList.remove('animate-in');
  }
  button.classList.remove('animate-in');

  var duration = 200;

  setTimeout(function () {
    title.classList.add('animate-in');
  }, 1 * duration);

  setTimeout(function () {
    courseFeatureElements[0].classList.add('animate-in');
  }, 2 * duration);

  setTimeout(function () {
    courseFeatureElements[1].classList.add('animate-in');
  }, 3 * duration);

  setTimeout(function () {
    courseFeatureElements[2].classList.add('animate-in');
  }, 4 * duration);

  setTimeout(function () {
    courseFeatureElements[3].classList.add('animate-in');
  }, 5 * duration);

  setTimeout(function () {
    courseFeatureElements[4].classList.add('animate-in');
  }, 5 * duration);

  setTimeout(function () {
    courseFeatureElements[5].classList.add('animate-in');
  }, 6 * duration);

  setTimeout(function () {
    courseFeatureElements[6].classList.add('animate-in');
  }, 7 * duration);

  setTimeout(function () {
    button.classList.add('animate-in');
  }, 8 * duration);
}

animate();

button.addEventListener('click', function() {
  animate();
});