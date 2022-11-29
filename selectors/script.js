const importantElements = document.querySelectorAll('.important');

importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});