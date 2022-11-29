const importantElements = document.querySelectorAll('.important');

importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});

const images = document.querySelectorAll("img");

images.forEach(img => {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
});

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => {
    console.log(p.textContent);
    if (p.className) {
        console.log("Class name: " + p.className);
    }
});

paragraphs.forEach(paragraph => {
    if (!paragraph.classList.contains("special")) {
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      paragraph.style.color = randomColor;
    }
  });