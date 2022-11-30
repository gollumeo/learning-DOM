let learners = ["Arno Volts", "Aurélien Mariaule", "Aurore Lemaire", "Benjamin Porsont", "Céline Verreydt", "Corentin Miserque", "Dominique Coppée", "Edouard de Romrée de Vichenet", "Hugo Goorickx", "Jofrey Houyoux", "Jonathan Manes", "Jonathan Bajoux", "Laura Wilhelmi", "Lysie Soyez", "Marnie Benalia", "Mathilde Cornelis", "Milo Bonnet", "Nadim El Nakadi", "Nathalie Vanden Abeele", "Nathalie Goffette", "Nour Everaert", "Pierre Mauriello", "Quentin Bource ", "Virginie Dourson"];
let textColor = null;
let color = 0;

let random = () => Math.floor(Math.random() * 256);

function lightOrDark(color) {


    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

        textColor = 'black';
    }
    else {

        textColor = 'white';
    }
}

// randomizing in which order the learners are sorted so we can fake the random creation of the paragraphs
learners.sort(() => Math.random() - 0.5);

const article = document.querySelector('article');
let bool;

for (let i = 0; i < learners.length; i++) {
    color = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
    //create section
    const newSection = document.createElement('section');

    //random background-color
    newSection.style.backgroundColor = color;

    lightOrDark(color);

    //create paragraph
    const newParagraph = document.createElement('p');
    newParagraph.style.color = textColor;
    newParagraph.appendChild(document.createTextNode(learners[i]));
    newSection.appendChild(newParagraph);



    if (newSection.style.backgroundColor) {
        let bool = true;
    } else {
        newSection.style.backgroundColor = color;
    }

    //append section to article
    article.appendChild(newSection);
}