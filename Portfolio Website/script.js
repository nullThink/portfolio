const welcomeText = document.querySelector('#welcome-text');

const buttonContainer = document.querySelector(".buttons-container");
const aboutMeButton = document.querySelector(".about-me-button");
const projectsButton = document.querySelector(".projects-button");
const contactMeButton = document.querySelector(".contact-me-button");

const welcomeSection = document.querySelector("#welcome-section");
// const aboutMeSection = document.querySelector("#about-me-section");
// const projectsSection = document.querySelector("#projects-section");
// const contactMeSection = document.querySelector("#contact-me-section");

welcomeSection.style.height = window.innerHeight;
// aboutMeSection.style.height = window.innerHeight;
// projectsSection.style.height = window.innerHeight;
// contactMeSection.style.height = window.innerHeight;
//aboutMeButton.addEventListener('click', window.scrollTo(0, aboutMeSection.offsetTop));
//projectsButton.addEventListener('click', window.scrollTo(0, projectsSection.offsetTop));
//contactMeButton.addEventListener('click', window.scrollTo(0, contactMeSection.offsetTop));

const welcomes = ["Welcome", "Bienvenue", "欢迎光临"];

window.onload = function() {
    // function order(callback) {
    //     printAndRemove("initializing....");
    //     callback();
    // }
    printAndRemove(welcomes[0])
        //"initializing....");
}

async function printByLetter(index, message, repeats) {


    if (index < message.length) {

        welcomeText.innerHTML = message.substring(0, index);
        welcomeText.append(message[index++]);
        welcomeText.append("_");

        if (index == message.length) {
            if (message == "initializing....") {
                if (repeats < 9) {
                    repeats++;
                    index = 12;
                    welcomeText.innerHTML = "initializing";
                }
            } else {
                let flash = 0;
                setInterval(function() {
                    if (flash % 2 == 0) {
                        welcomeText.innerHTML = message;
                    } else {
                        welcomeText.append("_");
                    }
                    flash++;
                }, 500);
            }

            // if (message[index] == "_") {
            //     welcomeText.innerHTML = substring(0, index - 1);
            // } else {
            //     message = message + "_";
            // }
        }


        setTimeout(function() { printByLetter(index, message, repeats) }, 90)
    }
}

function printAndRemove(message) {
    printByLetter(0, message, 0);
    //add remove part :P

    // function removeByLetter(index, message) {
    //     welcomeText.innerHTML = message.substring(0, index--);

    //     if (message.substring(0, index) == "") {
    //         welcomeText.innerHTML = " ";
    //     }

    //     setTimeout(function() { removeByLetter(index, message) }, 90);

    // }

    // setTimeout(function() {
    //     let index = message.length;
    //     removeByLetter(index, message);
    // }, 8000);
}