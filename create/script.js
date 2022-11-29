let learners = ["Arno Volts", "Aurélien Mariaule", "Aurore Lemaire", "Benjamin Porsont", "Céline Verreydt", "Corentin Miserque", "Dominique Coppée", "Edouard de Romrée de Vichenet", "Hugo Goorickx", "Jofrey Houyoux", "Jonathan Manes", "Jonathan Bajoux", "Laura Wilhelmi", "Lysie Soyez", "Marnie Benalia", "Mathilde Cornelis", "Milo Bonnet", "Nadim El Nakadi", "Nathalie Vanden Abeele", "Nathalie Goffette", "Nour Everaert", "Pierre Mauriello", "Quentin Bource ", "Virginie Dourson"];

// randomizing in which order the learners are sorted so we can fake the random creation of the paragraphs
learners.sort(() => Math.random() - 0.5);

const article = document.querySelector('article');

for (let i = 0; i < learners.length; i++) {
    //create section
    const newSection = document.createElement('section');

    //random background-color
    const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    newSection.style.backgroundColor = color;

    //check background brightness to change text color
    let brightness = (parseInt(color.substring(1,3), 16) * 0.299) + (parseInt(color.substring(3,5), 16) * 0.587) + (parseInt(color.substring(5,7), 16) * 0.114);
    let textColor;
    if (brightness >= 60) {
        textColor = 'black';
    } else {
        textColor = 'white';
    }

    //create paragraph
    const newParagraph = document.createElement('p');
    newParagraph.style.color = textColor;
    newParagraph.appendChild(document.createTextNode(learners[i]));
    newSection.appendChild(newParagraph);

    //append section to article
    article.appendChild(newSection);
}