console.log(document.title);
document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

let bodyChildren = document.body.children;
for (let child of bodyChildren) {
  console.log(child);
}